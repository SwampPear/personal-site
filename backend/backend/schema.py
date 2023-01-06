import graphene
from graphene_django import DjangoObjectType

from core.models import Post


class PostType(DjangoObjectType):
    class Meta:
        model = Post
        fields = ('postId', 'title', 'reading_time', 'content')


class Query(graphene.ObjectType):
    all_posts = graphene.List(PostType)
    post_by_id = graphene.Field(PostType, name=graphene.Int(required=True))

    def resolve_all_posts(root, info):
        return Post.objects.all()

    def resolve_post_by_id(root, info, id):
        try:
            return Post.objects.get(id=id)
        except Post.DoesNotExist:
            return None


class PostInput(graphene.InputObjectType):
    postId = graphene.ID()
    title = graphene.String()
    reading_time = graphene.Int()
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

        return CreatePost(book=post_instance)


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


class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()
    update_post = UpdatePost.Field()
    delete_post = DeletePost.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)