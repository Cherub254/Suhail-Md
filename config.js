const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Nairobi,kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254726044290";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_50_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA1LFxuICAgICAgICAxODgsXG4gICAgICAgIDUxLFxuICAgICAgICA0NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjIsXG4gICAgICAgIDcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDMxLFxuICAgICAgICA0NyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTEyLFxuICAgICAgICA4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDk5LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTAsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDM1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgOTIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDExNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICA5NCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTUwLFxuICAgICAgICAzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MixcbiAgICAgICAgODgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjA4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjcsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg0LFxuICAgICAgICA4OSxcbiAgICAgICAgNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0LFxuICAgICAgICA5NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxODgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMixcbiAgICAgICAgMTc0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMzAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYwLFxuICAgICAgICA3MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDY1LFxuICAgICAgICA4NixcbiAgICAgICAgMjE2LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDksXG4gICAgICAgIDk4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjExLFxuICAgICAgICAxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODAsXG4gICAgICAgIDU4LFxuICAgICAgICA3MixcbiAgICAgICAgNjQsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICA2OCxcbiAgICAgICAgMTkwLFxuICAgICAgICA0NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NyxcbiAgICAgICAgODUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg5LFxuICAgICAgICA4NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA1NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiN0gxWHkxelhnZ1F1VU84OVdweUxCcTI3aHRIYTZGTzBaL3ZyTGxHV1l3TT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjYwNDQyOTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkI4NDkxRTA5MzQ3OUNFMDMwMUMwNkZDMUNCRkU2Qzc5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzI4OTQ1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcyNjA0NDI5MEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzEwOTBCRERERTc1OEZFNDQ1M0M5NzA3MDJGMjlDOTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3Mjg5NDU0XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIi01Z0d0UGxRUWgtdnpnbVhZMElsVndcIixcbiAgXCJwaG9uZUlkXCI6IFwiMDZiNzVkOGItZDM4Yi00NjViLWI5NWEtYWM3NWFjNmU0ZDk2XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNCxcbiAgICAgIDM2LFxuICAgICAgMjIyLFxuICAgICAgNzMsXG4gICAgICA5NSxcbiAgICAgIDE2NixcbiAgICAgIDIzMyxcbiAgICAgIDE4MyxcbiAgICAgIDE4NyxcbiAgICAgIDkzLFxuICAgICAgMTI5LFxuICAgICAgMzgsXG4gICAgICAyMDgsXG4gICAgICAxNTUsXG4gICAgICAxOCxcbiAgICAgIDEwLFxuICAgICAgMTE1LFxuICAgICAgMTExLFxuICAgICAgMjI2LFxuICAgICAgMjEyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMzUsXG4gICAgICAxMDAsXG4gICAgICAxMzIsXG4gICAgICA4OSxcbiAgICAgIDk3LFxuICAgICAgMjU0LFxuICAgICAgMSxcbiAgICAgIDg3LFxuICAgICAgMTY5LFxuICAgICAgMjIyLFxuICAgICAgMTc1LFxuICAgICAgNzYsXG4gICAgICAxNzksXG4gICAgICAxNTEsXG4gICAgICAyNTEsXG4gICAgICA0OSxcbiAgICAgIDc5LFxuICAgICAgNTQsXG4gICAgICAyMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRThRM1dHUUxcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDcyNjA0NDI5MDo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQ4NTQ1OTQ5MDQ5MDU2OjU1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKZlOqngcS2w4rDkcOYw4dIxJTqp4LimZRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNT3VwTDhERU9hRDc3SUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9SMjYyNHI2TGkxNksxZXk5QkhlLzVhOEJLU0ZQRWRUK0FjSmJLeG9EUUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS3I5Q0dMTGJ1Njlxd3FVMUcvSzVsVVhDUlUzQTkydi9Oa1pYNER6S1Z6ajdudFZOZ0lDckc2aHBzUVRIaWtQWXhXbmpWeDZCSFFpRzdvVGlIdGYxQXc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwid0Z3LzRPQWdxYTBqSjV4NytqNUxRemw2VW15Z3EzY0w4dE5adTUwSFZzREYwYktvTmFGa2xnV3pQRUtGblBWcUw3dnczZ1RiWitUM09iL1gxZUdNaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzI2MDQ0MjkwOjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE3Mjg5NDUwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSlhUXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKWFQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJUSzNVelN1UUVPRllUaWU1dVN2RGNFcm1lbDUyMWNBRWVacEhrZzc4bXVJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkzODAyMjcxNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "♔꧁ĶÊÑØÇHĔ꧂♔",
  packname: process.env.PACK_NAME || "♔꧁ĶÊÑØÇHĔ꧂♔",
  botname : process.env.BOT_NAME  || "♔꧁ĶÊÑØÇHĔ꧂♔",
  ownername:process.env.OWNER_NAME|| "♔꧁ĶÊÑØÇHĔ꧂♔",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "true",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
