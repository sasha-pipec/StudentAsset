from django.views.generic import TemplateView


class MainPage(TemplateView):
    """Main page render here"""
    template_name = 'index.html'

