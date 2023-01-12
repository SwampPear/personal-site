from django.db import models


# post type enumeration
POST = 'P'
WORK = 'W'

POST_TYPE = [
    (WORK, 'work'),
    (POST, 'post')
]

class Post(models.Model):
    type = models.CharField(
        max_length=1,
        choices=POST_TYPE,
        default=POST,
    )
    title = models.CharField(max_length=127)
    reading_time = models.IntegerField(default=5)
    content = models.JSONField()


"""
# content data for testing purposes
data = {
    "large_header":"this is a large header",
    "small_header":"and this is a small header",
    "paragraph":"and this is a paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo duis ut diam quam nulla porttitor massa id. A iaculis at erat pellentesque adipiscing commodo. Dictum at tempor commodo ullamcorper a lacus vestibulum. At lectus urna duis convallis convallis tellus id interdum. Netus et malesuada fames ac turpis egestas. Est velit egestas dui id ornare arcu odio ut. Pretium fusce id velit ut tortor. Gravida neque convallis a cras semper auctor. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Sit amet massa vitae tortor condimentum lacinia quis vel. Tristique senectus et netus et malesuada. Molestie at elementum eu facilisis sed odio morbi quis. Aliquet sagittis id consectetur purus ut faucibus. Vitae et leo duis ut diam. Volutpat lacus laoreet non curabitur gravida arcu ac. Tellus id interdum velit laoreet id. Tortor aliquam nulla facilisi cras. Tristique senectus et netus et malesuada fames ac turpis. Malesuada pellentesque elit eget gravida. Nunc id cursus metus aliquam. Sed sed risus pretium quam vulputate dignissim suspendisse in. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Donec enim diam vulputate ut. Suscipit tellus mauris a diam maecenas sed enim ut sem."
}
"""