import scrapy

class TestSpider(scrapy.Spider):
    name = "posts"

    start_urls = [
        "https://blob.scrapinghub.com/page/1",
        "https://blob.scrapinghub.com/page/2"
    ]

    def parse(self, response):
        page = response.url
        page.split("/")[-1]
        filename = "posts-%s.html" % page

        with open(filename, "wb") as f:
            f.write((response.body))
