import graphene
from graphene_django import DjangoObjectType

from core.models import Post, Work


class PostType(DjangoObjectType):
    class Meta:
        model = Post
        fields = ('postId', 'title', 'reading_time', 'content')


class WorkType(DjangoObjectType):
    class Meta:
        model = Work
        fields = ('workId', 'title', 'content')


class Query(graphene.ObjectType):
    all_posts = graphene.List(PostType)
    post_by_id = graphene.Field(PostType, postId=graphene.Int(required=True))

    all_works = graphene.List(WorkType)
    work_by_id = graphene.Field(WorkType, postId=graphene.Int(required=True))

    def resolve_all_posts(root, info):
        return Post.objects.all()

    def resolve_post_by_id(root, info, postId):
        try:
            return Post.objects.get(postId=postId)
        except Post.DoesNotExist:
            return None

    def resolve_all_works(root, info):
        return Work.objects.all()

    def resolve_work_by_id(root, info, workId):
        try:
            return Work.objects.get(workId=workId)
        except Work.DoesNotExist:
            return None


class PostInput(graphene.InputObjectType):
    postId = graphene.ID()
    title = graphene.String()
    reading_time = graphene.Int()
    content = graphene.JSONString()


class WorkInput(graphene.InputObjectType):
    workId = graphene.ID()
    title = graphene.String()
    content = graphene.JSONString()


class CreatePost(graphene.Mutation):
    class Arguments:
        post_data = PostInput(required=True)

    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, info, post_data=None):
        post_instance = Post( 
            postId=post_data.postId,
            title=post_data.title,
            reading_time=post_data.reading_time,
            content=post_data.content
        )

        post_instance.save()

        return CreatePost(post=post_instance)


class UpdatePost(graphene.Mutation):
    class Arguments:
        post_data = PostInput(required=True)

    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, info, post_data=None):

        post_instance = Post.objects.get(pk=post_data.postId)

        if post_instance:
            post_instance.postId = post_data.postId
            post_instance.title = post_data.title
            post_instance.reading_time = post_data.reading_time
            post_instance.content = post_data.content
        
            post_instance.save()

            return UpdatePost(post=post_instance)

        return UpdatePost(post=None)


class DeletePost(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    post = graphene.Field(PostType)

    @staticmethod
    def mutate(root, info, id):
        post_instance = Post.objects.get(pk=id)
        post_instance.delete()

        return None


class CreateWork(graphene.Mutation):
    class Arguments:
        work_data = WorkInput(required=True)

    work = graphene.Field(WorkType)

    @staticmethod
    def mutate(root, info, work_data=None):
        work_instance = Work( 
            workId=work_data.workId,
            title=work_data.title,
            content=work_data.content
        )

        work_instance.save()

        return CreateWork(work=work_instance)


class UpdateWork(graphene.Mutation):
    class Arguments:
        work_data = WorkInput(required=True)

    work = graphene.Field(WorkType)

    @staticmethod
    def mutate(root, info, work_data=None):

        work_instance = Work.objects.get(pk=work_data.workId)

        if work_instance:
            work_instance.workId = work_data.workId
            work_instance.title = work_data.title
            work_instance.content = work_data.content
        
            work_instance.save()

            return UpdateWork(work=work_instance)

        return UpdateWork(work=None)


class DeleteWork(graphene.Mutation):
    class Arguments:
        id = graphene.ID()

    work = graphene.Field(WorkType)

    @staticmethod
    def mutate(root, info, id):
        work_instance = Work.objects.get(pk=id)
        work_instance.delete()

        return None


class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()
    update_post = UpdatePost.Field()
    delete_post = DeletePost.Field()

    create_work = CreateWork.Field()
    update_work = UpdateWork.Field()
    delete_work = DeleteWork.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)