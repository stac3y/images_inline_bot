const {Telegraf} = require('telegraf');
require('custom-env').env('staging');

const bot = new Telegraf(process.env.BOT_TOKEN);
const searchImage = require('./search_images');

bot.start((ctx) => {
    return ctx.replyWithMarkdown(`Hi! This is images inline bot!
Just type in any chat [@ImagesInlineBot](t.me/ImagesInlineBot)
and you will receive the some images for this query.`);
});

bot.on('inline_query', async(ctx)=>{
    const result = await searchImage(ctx.inlineQuery.query);
    if (!ctx.inlineQuery.query) return;
    const data = result.data.hits.map((hit) =>{
        return {
            type: 'photo',
            id: hit.id.toString(),
            photo_url: hit.largeImageURL,
            thumb_url: hit.previewURL,
            title: hit.tags,
            description: hit.tags
        }
    });

    console.log(data)
    ctx.answerInlineQuery(data);
})

bot.launch();