import pprint
import asyncio
from pyppeteer import launch


async def get_browser():
    return await launch({"headless": False})
...
async def extract_all(languages):
    browser = await get_browser()
    result = {}
    for name, url in languages.items():
        result.update(await extract(browser, name, url))
    return result
if __name__ == "__main__":
    languages = {
        "python": "https://es.wikipedia.org/wiki/Python",
        ...
    }

    loop = asyncio.get_event_loop()
    result = loop.run_until_complete(extract_all(languages))

    pprint.pprint(result)