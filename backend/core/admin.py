from django.contrib import admin
from .models import Post, Contact


admin.site.site_header = 'Michael Vaden Website Admin'
admin.site.site_title = 'Michael Vaden Website Admin'
admin.site.index_title = 'Michael Vaden Website Admin'

admin.site.register(Post)
admin.site.register(Contact)