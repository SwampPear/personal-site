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

schema = graphene.Schema(query=Query)