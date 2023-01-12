import graphene
from graphene_django import DjangoObjectType

from core.models import Post, Contact


class PostType(DjangoObjectType):
    class Meta:
        model = Post
        fields = ('id', 'type', 'title', 'reading_time', 'content')


class ContactType(DjangoObjectType):
    class Meta:
        model = Contact
        fields = ('id', 'name', 'email', 'content')


class Query(graphene.ObjectType):
    # Post
    all_posts = graphene.List(PostType)
    post_by_title = graphene.Field(PostType, title=graphene.String(required=True))

    def resolve_all_posts(root, info):
        return Post.objects.all()

    def resolve_post_by_title(root, info, title):
        try:
            return Post.objects.get(title=title)
        except Post.DoesNotExist:
            return None

    # Contact
    all_contacts = graphene.List(ContactType)
    contact_by_id = graphene.Field(ContactType, id=graphene.ID(required=True))

    def resolve_all_contacts(root, info):
        return Contact.objects.all()

    def resolve_contact_by_id(root, info, id):
        try:
            return Contact.objects.get(pk=id)
        except Contact.DoesNotExist:
            return None


class PostInput(graphene.InputObjectType):
    id = graphene.ID(required=False)
    type = graphene.String()
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
            type=post_data.type,
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

        post_instance = Post.objects.get(pk=post_data.id)

        if post_instance:
            post_instance.id = post_data.id
            post_instance.type = post_data.type
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


class ContactInput(graphene.InputObjectType):
    id = graphene.ID(required=False)
    name = graphene.String()
    email = graphene.String()
    content = graphene.String()


class CreateContact(graphene.Mutation):
    class Arguments:
        contact_data = ContactInput(required=True)

    contact = graphene.Field(ContactType)

    @staticmethod
    def mutate(root, info, contact_data=None):
        contact_instance = Contact(
            name=contact_data.name,
            email=contact_data.email,
            content=contact_data.content
        )

        contact_instance.save()

        return CreateContact(contact=contact_instance)


class Mutation(graphene.ObjectType):
    create_post = CreatePost.Field()
    update_post = UpdatePost.Field()
    delete_post = DeletePost.Field()

    create_contact = CreateContact.Field()


schema = graphene.Schema(query=Query, mutation=Mutation)