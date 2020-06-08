const Discord = require('discord.js');
const client = new Discord.Client();
const Enmap = require('enmap');
client.points = new Enmap({ name: "waarschuwingen" });
const pollEmbed = require('discord.js-poll-embed');

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.type === 'PINS_ADD') {
        msg.delete();
    }
    if (msg.content === '!ping') {
        msg.channel.send('pong');
    }
    if (msg.content === '!pong') {
        msg.channel.send('ping');
        msg.reply('nice try retard');
    }
    if (msg.content === '!willems pp') {
        msg.channel.send('NullPointerException: no pp found');
    }
    if (msg.content === '!indexer')
        msg.channel.send('https://grepodata.com/indexer/5lkhjr8u');
    if (msg.content === '!commands' || msg.content === '!help') {
        msg.channel.send('COMMANDS\n----------------------\n!supremeleader\n!papi\n!pipi\n!big pp\n!quote\n!indexer\n!waarschuwing < @username >\n!warnings\n!waarschuwingen\n!willems pp\n!kolotime < kolo tijd >\n!removekolos\n!rustig\n!hemelsreceptje\n----------------------');
    }
    if (msg.content === '!rustig') {
        msg.channel.send('https://j.gifs.com/2xE2gN.gif');
    }
    if (msg.content === '!hemelsreceptje') {
        msg.channel.send('https://j.gifs.com/VA9o0M.gif');
    }
    if (msg.content.startsWith('!kolotime')) {
        msg.react('⛵');
        msg.pin();
        msg.channel.send('@here kolo time')
    }
    if (msg.content === '!lightshot') {
        msg.channel.send('Fucking download lightshot https://app.prntscr.com/nl/');
    }
    if (msg.content === '!corona time tts') {
        corona = Math.round(Math.random() * 15);
        if (corona <= 5) {
            msg.reply('You have corona', { tts: true });
        }
        if (corona > 5 && corona <= 10) {
            msg.reply('You are corona free papi chulo', { tts: true });
        } if (corona > 10) {
            msg.reply('You have corona', { tts: true });
            msg.reply('The doctor made a mistake, u have aids', { tts: true });
        }
    }

    if (msg.content.startsWith('!votekick')) {
        const user = msg.mentions.users.first();
        if (!user) return msg.reply("mention iemand na het command noob!");

        const filter = (reaction, user) => {
            return reaction.emoji.name === '⬆️' || reaction.emoji.name === '⬇️';
        };

        let ups = 0;
        let downs = 0;

        const embed = new Discord.MessageEmbed()
            .setColor(0xFFC300)
            .setTitle(`**Kicken we ${user.username} ?**`)
            .setDescription(`Votekick gestard door ${msg.author.username}`)
            .addFields({ name: 'Opties', value: `⬆️ : kicken noob\n\n⬇️ : leave ${user.username} alone!` });

        msg.channel.send(embed).then(msg => {
            msg.react('⬆️');
            msg.react('⬇️');

            let ups = 0;
            let downs = 0;

            const collector = msg.createReactionCollector(filter, { time: 10000 });

            collector.on('collect', (reaction, user) => {
                if (reaction.emoji.name === '⬆️') {
                    ups++;
                } if (reaction.emoji.name === '⬇️') {
                    downs++;
                }
            });

            collector.on('end', collected => {
                if (ups > downs) {
                    msg.channel.send(`${user.username} is weggestemd met ${ups -2} stemmen tegen ${downs-2}`)
                }

                if (ups < downs) {
                    msg.channel.send(`${user.username} is voorlopig safe met ${ups-2} stemmen tegen ${downs-2}`)
                }

                if (ups === downs) {
                    msg.channel.send(`Dilemma, ${user.username} krijgt het voordeel van de twijfel met ${ups-2} stemmen tegen ${downs-2}`)
                }
            });
        });
    }

    if (msg.content === '!jordi') {
        msg.channel.send('What a way to redeem yourself, chief');
        msg.channel.send('https://ibb.co/6wy3WpW \n https://ibb.co/fXThyR4');
    }

    if (msg.content === '!corona time') {
        corona = Math.round(Math.random() * 13);
        if (corona <= 5) {
            msg.reply('je hebt corona');
        }
        if (corona > 5 && corona <= 10) {
            msg.reply('corona free papi');
        } if (corona > 10) {
            msg.reply('Je hebt corona');
            msg.reply('de dokter vergiste zich, geen corona. Je hebt aids');
        }
    }
    if (msg.content === '!removekolos') {
        msg.channel.messages.fetch().then((msgCollection) => {
            msgCollection.forEach(message => {
                if (message.pinned && message.content.includes('!kolotime')) {
                    message.unpin();
                }
                if (message.type === 'PINS_ADD') {
                    message.delete();
                }
                if (message.content.includes('!kolotime') || message.content === '@here kolo time') {
                    message.delete();
                }
            });
        })
        msg.channel.send('All pinned kolo\'s have been removed');
    }
    if (msg.content === '!supremeleader') {
        msg.channel.send('@here Joppe is our supreme leader. We must thank him daily and praise him for his courageous acts in the great war of valorian.', {
            tts: true
        });
    }
    if (msg.content === '!big pp') {
        var result;
        var score = Math.round(Math.random() * 10);
        switch (score) {
            case 0:
                result = '8D';
                break;
            case 1:
                result = '8=D';
                break;
            case 2:
                result = '8==D';
                break;
            case 3:
                result = '8===D';
                break;
            case 4:
                result = '8====D';
                break;
            case 5:
                result = '8=====D';
                break;
            case 6:
                result = '8======D';
                break;
            case 7:
                result = '8=======D';
                break;
            case 8:
                result = '8========D';
                break;
            case 9:
                result = '8=========D';
                break;
            case 10:
                result = '8==========D';
                break;
        }
        msg.reply('You have a ' + score + '/10 PP' + '\n' + result);
    }

    if (msg.content === '!papi') {
        msg.reply('https://tenor.com/view/flirty-sethrogen-gif-4794721');
    }

    if (msg.content === '!pipi') {
        msg.reply('https://www.youtube.com/watch?v=V4ORdnvgjTA&t=10s');
    }

    if (msg.content === '!quote') {
        var quotes = ['The rollarcoaster life is not for the weak he said. While walking away with feathers in his hand.',
            'We will arrive at planet Zior in a forthnight. Prepare your glumgarian swords, because the fungies will be stronger than ever',
            'jotarroooo papi has big flunky armpithair with nice juicy renaissance nipples',
            'Brotha from anotha motha, if that is what you are refering me as. Then I will not respond for you are not my comerade. Goodbye',
            'the people who have suffered from the banana plague, will never be the same. They must hey have you seen my garden',
            'People underestimate the powers of a good Breivik Compane. They are united as one, and one as a united people.',
            'Father said, take care my son. As he folded his papers into the palm of his hand. Farewell and take care of Simon, he is a good boy. Yet the Osmolians might be coming to get him. Take care, and be gone now. Be gone.',
            'my life will never be the same after I take this shower. Maybe this shower is the gate to hapiness, who knows... I know i dont',
            'me house is sacred, you german nazi! i will never buy your books again, whoever you are. Obama is hot',
            'Yet the unbroken vows of the people that complete the training are wrong.',
            'The life of man (in a state of nature) is solitary, poor, nasty, brutish, and short',
            'People that underestimate the power of a good writer of books are often bad. They do not understand the complexity and integrity a good book gives. Mein kampf is mein favorite',
            'he will conquer the vulgarians, even if he has to lose his family. He will conquer.'
        ];
        var random = Math.round(Math.random() * quotes.length);
        msg.channel.send(quotes[random], {
            tts: true
        });
    }

    if (msg.content == '!big brain') {
        bigbrain = Math.round(Math.random() * 100);
        msg.reply('You have a big brain capacity of ' + bigbrain + '%');
    }

    if (msg.content == '!rules') {
        var rules = '1. Langer dan 4 uur inactief op grepolis zonder geldige reden (bv slaap)'
            + '\n' + '2. Een opmerking die minstens 3 leden van de discord ontoelaatbaar vinden'
            + '\n' + '3. Domme vraag / opmerking over basis grepolis kennis'
            + '\n' + '4. Domme aanval of op een idiote manier troepen verloren'
            + '\n' + '5. Timing verneukt door domheid en onkunde'
            + '\n' + '6. Commentaar op de bot als je zelf niets van code kennis hebt'
            + '\n' + '7. Personen onnodig taggen op discord als ze niet gestoord willen worden'
            + '\n' + '8. Iedereen, vooral Jordi, is beperkt tot 3 economische opmerkingen per dag';
        const embed = new Discord.MessageEmbed()
            .setTitle("Waarschuwingen")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        embed.addFields(
            { name: 'Rules', value: rules },
        )

        return msg.channel.send({ embed });
    }

    if (msg.content === '!grenzentoe') {
        msg.channel.send('https://media.giphy.com/media/l4GUZBrQKie2YSNyY1/giphy.gif');
    }


    // waarschuwingen overzicht

    if (msg.content === '!warnings') {
        client.points.ensure(`${msg.guild.id}-${msg.author.id}`, {
            user: msg.author.id,
            guild: msg.guild.id,
            points: 0,
            username: msg.author.username,
            solli: 0,
            cluster: 0
        });
        const key = `${msg.guild.id}-${msg.author.id}`;
        return msg.reply(`je hebt momenteel ${client.points.get(key, "points")} waarschuwing(en)`);
    }

    if (msg.content === '!waarschuwingen') {
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined).array();

        const sorted = filtered.sort((a, b) => b.points - a.points);

        const embed = new Discord.MessageEmbed()
            .setTitle("Waarschuwingen")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var warns = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            warns += data.points + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: warns, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content.startsWith('!deletews')) {
        if (msg.author.id !== msg.guild.ownerID)
            return msg.reply("You're not my boss, you can't do that!");
        const user = msg.mentions.users.first();
        if (!user) return msg.reply("mention iemand na het command om een waarschuwing te geven noob!");

        let userPoints = client.points.get(`${msg.guild.id}-${user.id}`, "points");
        userPoints -= 1;

        client.points.set(`${msg.guild.id}-${user.id}`, userPoints, "points")

        msg.channel.send(`${user.tag} heeft een waarschuwing verloren en heeft nu ${userPoints} waarschuwing(en).`);
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined).array();

        const sorted = filtered.sort((a, b) => b.points - a.points);

        const embed = new Discord.MessageEmbed()
            .setTitle("Waarschuwingen")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var warns = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            warns += data.points + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: warns, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content === '!retard') {
        msg.channel.send('https://ibb.co/fnWd0zj');
    }

    if (msg.content.startsWith('!waarschuwing')) {
        const user = msg.mentions.users.first();
        if (!user) return msg.reply("mention iemand na het command om een waarschuwing te geven!");

        client.points.ensure(`${msg.guild.id}-${user.id}`, {
            user: user.id,
            guild: msg.guild.id,
            points: 0,
            username: user.username,
            solli: 0
        });

        let userPoints = client.points.get(`${msg.guild.id}-${user.id}`, "points");
        userPoints += 1;

        client.points.set(`${msg.guild.id}-${user.id}`, userPoints, "points")

        msg.channel.send(`${user.tag} heeft een waarschuwing ontvangen en heeft nu ${userPoints} waarschuwing(en).`);
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined).array();

        const sorted = filtered.sort((a, b) => b.points - a.points);

        const embed = new Discord.MessageEmbed()
            .setTitle("Waarschuwingen")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var warns = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            warns += data.points + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: warns, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content === "!cleanupWarnings") {
        if (msg.author.id !== msg.guild.ownerID)
            return msg.reply("You're not my boss, you can't do that!");

        const filtered = client.points.filter(p => p.guild === msg.guild.id);

        filtered.forEach(data => {
            client.points.delete(`${msg.guild.id}-${data.user}`);
        });

        msg.channel.send('Waarschuwingen gereset');
    }

    if (msg.content === '!clearchannel') {
        if (msg.author.id !== msg.guild.ownerID || msg.author.username.toLowerCase !== 'cubicus') {
            msg.channel.bulkDelete(100);
        } else {
            return msg.reply("You're not my boss, you can't do that!");
        }
    }

    // sollicitatie punten overzicht

    if (msg.content === '!sollipoints') {
        client.points.ensure(`${msg.guild.id}-${msg.author.id}`, {
            user: msg.author.id,
            guild: msg.guild.id,
            points: 0,
            username: msg.author.username,
            solli: 0,
            cluster: 0
        });
        const key = `${msg.guild.id}-${msg.author.id}`;
        return msg.reply(`je hebt momenteel ${client.points.get(key, "solli")} solli's afgewezen`);
    }

    if (msg.content === '!sollicitaties') {
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined).array();

        const sorted = filtered.sort((a, b) => b.sollis - a.sollis);

        const embed = new Discord.MessageEmbed()
            .setTitle("Sollicitatie punten")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var sollis = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            sollis += data.solli + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: sollis, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content.startsWith('!deletepoint')) {
        if (msg.author.id !== msg.guild.ownerID)
            return msg.reply("You're not my boss, you can't do that!");
        const user = msg.mentions.users.first();
        if (!user) return msg.reply("mention iemand na het command om een punt af te trekken!");

        let userPoints = client.points.get(`${msg.guild.id}-${user.id}`, "solli");
        userPoints -= 1;

        client.points.set(`${msg.guild.id}-${user.id}`, userPoints, "solli")

        msg.channel.send(`${user.tag} heeft een sollicitatie punt verloren en heeft nu ${userPoints} punt(en).`);
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined).array();

        const sorted = filtered.sort((a, b) => b.solli - a.solli);

        const embed = new Discord.MessageEmbed()
            .setTitle("Sollicitatie punten")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var warns = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            sollis += data.solli + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: sollis, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content.startsWith('!sollipoint')) {
        const user = msg.mentions.users.first();
        if (!user) return msg.reply("mention iemand na het command om een punt te geven!");

        client.points.ensure(`${msg.guild.id}-${user.id}`, {
            user: user.id,
            guild: msg.guild.id,
            points: 0,
            username: user.username,
            solli: 0
        });

        let userPoints = client.points.get(`${msg.guild.id}-${user.id}`, "solli");
        userPoints += 1;

        client.points.set(`${msg.guild.id}-${user.id}`, userPoints, "solli")

        msg.channel.send(`${user.tag} heeft een sollicitatie afgewezen en heeft nu ${userPoints} punt(en).`);
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined).array();

        const sorted = filtered.sort((a, b) => b.solli - a.solli);

        const embed = new Discord.MessageEmbed()
            .setTitle("Sollicitatie punten")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var sollis = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            sollis += data.solli + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: sollis, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content === "!cleanuppoints") {
        if (msg.author.id !== msg.guild.ownerID)
            return msg.reply("You're not my boss, you can't do that!");

        const filtered = client.points.filter(p => p.guild === msg.guild.id);

        filtered.forEach(data => {
            client.points.delete(`${msg.guild.id}-${data.user}`);
        });

        msg.channel.send('Sollicitatie punten gereset');
    }

    // clusterpoints 

    if (msg.content === '!myclusterpoints') {
        client.points.ensure(`${msg.guild.id}-${msg.author.id}`, {
            user: msg.author.id,
            guild: msg.guild.id,
            points: 0,
            username: msg.author.username,
            solli: 0,
            cluster: 0
        });
        const key = `${msg.guild.id}-${msg.author.id}`;
        return msg.reply(`je hebt momenteel ${client.points.get(key, "cluster")} clustersteden overgenomen`);
    }

    if (msg.content === '!clusterpoints') {
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined && p.cluster !== undefined).array();

        const sorted = filtered.sort((a, b) => b.cluster - a.cluster);

        const embed = new Discord.MessageEmbed()
            .setTitle("Clusterpunten")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var cluster = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            cluster += data.cluster + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: cluster, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content.startsWith('!rmclusterpoint')) {
        if (msg.author.id !== msg.guild.ownerID)
            return msg.reply("You're not my boss, you can't do that!");
        const user = msg.mentions.users.first();
        if (!user) return msg.reply("mention iemand na het command om een punt af te trekken!");

        let userPoints = client.points.get(`${msg.guild.id}-${user.id}`, "solli");
        userPoints -= 1;

        client.points.set(`${msg.guild.id}-${user.id}`, userPoints, "solli")

        msg.channel.send(`${user.tag} heeft een clusterpunt verloren en heeft nu ${userPoints} punt(en).`);
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined && p.cluster !== undefined).array();

        const sorted = filtered.sort((a, b) => b.cluster - a.cluster);

        const embed = new Discord.MessageEmbed()
            .setTitle("Clusterpunten")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var cluster = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            cluster += data.cluster + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: cluster, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content.startsWith('!clusterpoint')) {
        const user = msg.mentions.users.first();
        if (!user) return msg.reply("mention iemand na het command om een punt te geven!");

        client.points.ensure(`${msg.guild.id}-${user.id}`, {
            user: user.id,
            guild: msg.guild.id,
            points: 0,
            username: user.username,
            solli: 0,
            cluster: 0
        });

        let userPoints = client.points.get(`${msg.guild.id}-${user.id}`, "cluster");
        userPoints += 1;

        client.points.set(`${msg.guild.id}-${user.id}`, userPoints, "cluster")

        msg.channel.send(`${user.tag} heeft een clusterstad overgenomen en heeft nu ${userPoints} punt(en).`);
        const filtered = client.points.filter(p => p.guild === msg.guild.id && p.username !== undefined && p.cluster !== undefined).array();

        const sorted = filtered.sort((a, b) => b.cluster - a.cluster);

        const embed = new Discord.MessageEmbed()
            .setTitle("Clusterpunten")
            .setAuthor(client.user.username, client.user.avatarURL)
            .setColor(0x00AE86);

        let i = 1;
        var ranks = '';
        var users = '';
        var cluster = '';
        for (const data of sorted) {
            ranks += i + '\n';
            users += data.username + '\n';
            cluster += data.cluster + '\n';
            i++;
        }
        embed.addFields(
            { name: 'rank', value: ranks, inline: true },
            { name: 'user', value: users, inline: true },
            { name: '#', value: cluster, inline: true }
        )
        i++;
        return msg.channel.send({ embed });
    }

    if (msg.content === "!cleanupclusterpoints") {
        if (msg.author.id !== msg.guild.ownerID)
            return msg.reply("You're not my boss, you can't do that!");

        const filtered = client.points.filter(p => p.guild === msg.guild.id);

        filtered.forEach(data => {
            client.points.cluster = 0;
        });

        msg.channel.send('Clusterpunten gereset');
    }
});

client.login('YOUR_BOT_TOKEN');
