from core.models import Post


new_post = Post()
new_post.type = 'P'
new_post.title = 'This Is Sparta'
new_post.reading_time = 10

content = [
    {
        'type':'paragraph',
        'content':'and this is a paragraph'
    }
]

new_post.content = content
new_post.save()