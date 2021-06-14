const {Telegraf} = require('telegraf');
require('custom-env').env('staging');
const axios = require('axios')

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
    return ctx.replyWithMarkdown(`Hi! This is images inline bot!
Just type in any chat [@ImagesInlineBot](t.me/ImagesInlineBot)
and you will receive the some images for this query.`);
});

bot.on('inline_query', (ctx)=>{
    const data = [{
        type: 'photo',
        id: '1',
        photo_url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg',
        thumb_url: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg',
        title: 'Kitten',
        description: 'description'
    }];
    ctx.answerInlineQuery(data);
})

bot.launch();