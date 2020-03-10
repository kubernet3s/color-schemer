import scrapy
from PIL import Image
import urllib.request as urllib

class PaintsSpider(scrapy.Spider):
    name = "paints"

    start_urls = [
        "https://shop.thearmypainter.com/products.php?ProductGroupId=19"
    ]

    def parse(self, response):
        paint_names = response.css('a::attr(title)').getall()
        paint_images = response.xpath('//a[contains(@rel, "gal")]')

        p_img_arr = []
        rgb_arr = []


        print(">>>>>>>>>>>>>>>")
        print(">>>>>>>>>>>>>>>")
        print(">>>>>>>>>>>>>>>")
        print(">>>>>>>>>>>>>>>")
        print(">>>>>>>>>>>>>>>")
        
        print((paint_images[0]))
        for image in paint_images:
            image_url = image.attrib['href']
            
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")
            print(">>>>>>>>>>>>>>>")

            # corrected_url = image_url[:57] + '%20' + image_url[58:]
            corrected_url = image_url.replace(" ", "%")
            print(corrected_url)

            p_img_arr.append(corrected_url)
            print()
            print()
            print()
            print()
            print()
            print()
            print()

            opened_img = Image.open(urllib.urlopen(corrected_url))
            color = opened_img.load()[100,300]
            rgb_arr.append(color)


        entry_num = 0
        for paint in paint_names:
            yield {
                '_id': entry_num + 1,
                'name': paint,
                'image': p_img_arr[entry_num],
                'rgba': rgb_arr[entry_num]
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