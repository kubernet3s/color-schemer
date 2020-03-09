import scrapy

class PaintsSpider(scrapy.Spider):
    name = "paints"

    start_urls = [
        "https://shop.thearmypainter.com/products.php?ProductGroupId=19"
    ]

    def parse(self, response):
        paint_names = response.css('a::attr(name)').getall()
        paint_images = response.xpath('//a[contains(@rel, "base")]')

        p_img_arr = []

        for image in paint_images:
            p_img_arr.append(image.attrib['href'])

        # print (p_img_arr)
        entry_num = 0
        for paint in paint_names:
            yield {
                'name': paint,
                'image': p_img_arr[entry_num]
            }
            entry_num += 1

        
        # for paint in response.css('a::text'):
        #     yield {
        #         'title': post.css('.post-header h2 a::text')[0].get()
        #     }
        # next_page = response.css('a.next-posts-link::attr(href)').get()
        # if next_page is not None:
        #     next_page = response.urljoin(next_page)

        # yield scrapy.Request(next_page, callback=self.parse)