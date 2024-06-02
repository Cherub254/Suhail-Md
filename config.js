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


global.devs = "254726044290" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254726044290";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://photos.app.goo.gl/zTkGodNEmgA8vPJV7" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";
global.anticall = process.env.Anticall || "true"

//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";
global.autoreact = process.env.Autoreact || "true"
global.install https://raw.githubusercontent.com/SuhailTechInfo/Suhail-Md-Media/main/plugins/areact.js
global.areact on    // react messages with cute emojies
global .areact all    // react messages with all emojies
global.areact cmd    // react only bot commands
global .areact off
global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_12_54_06_02_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI0LFxuICAgICAgICAyMDksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTAsXG4gICAgICAgIDExMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICA2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMDksXG4gICAgICAgIDQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDkyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMixcbiAgICAgICAgMTIxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNixcbiAgICAgICAgNjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNCxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDkxLFxuICAgICAgICA0M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgODQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDc1LFxuICAgICAgICA1OSxcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDg0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDM4LFxuICAgICAgICA4MyxcbiAgICAgICAgODAsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDkwLFxuICAgICAgICA0MixcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMzUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcwLFxuICAgICAgICA0OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1LFxuICAgICAgICAzN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTY1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ0LFxuICAgICAgICA1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMDcsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjExLFxuICAgICAgICAyNyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMixcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTIwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjMzLFxuICAgICAgICAxNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNyxcbiAgICAgICAgOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDczLFxuICAgICAgICAxOTIsXG4gICAgICAgIDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjAsXG4gICAgICAgIDU0LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjEyLFxuICAgICAgICA0MyxcbiAgICAgICAgMjgsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1NyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzNyxcbiAgICAgICAgMyxcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICA0OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDI4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzksXG4gICAgICAgIDQxLFxuICAgICAgICA5NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDYzLFxuICAgICAgICAxNzksXG4gICAgICAgIDg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDc0LFxuICAgICAgICA5MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMzAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDMzLFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTY0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlBZNDE1bDhWWTMyNGhaRDAwK29WL3BzN01wSXl5UHJZZWZJeTY2VU8zNVk9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzI2MDQ0MjkwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI1QzUxQjY5MDA5OUI2NTk2QzFDMzhEQ0QxOTk1NzVBQ1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTczMzI4ODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MjYwNDQyOTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjUwRDRERDY4OUFEMUVGM0QxQjYxQTY1QTA5MzkxMEYxXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzMzMjg4NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfRzdHeFdEVFJ3dWZpNUtSVTdYMDN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImMyODdkMzYyLTgyZGMtNDg1Yi04Y2U5LWE0NjgzNzU0OWQ1ZFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjIsXG4gICAgICAxNTIsXG4gICAgICA2NSxcbiAgICAgIDE1MSxcbiAgICAgIDM2LFxuICAgICAgMTQ3LFxuICAgICAgNixcbiAgICAgIDI4LFxuICAgICAgMTY3LFxuICAgICAgMjExLFxuICAgICAgNjMsXG4gICAgICAxMTcsXG4gICAgICAyMzcsXG4gICAgICAyMzQsXG4gICAgICAxMTYsXG4gICAgICAxODYsXG4gICAgICAxNjEsXG4gICAgICAxMjksXG4gICAgICAxODEsXG4gICAgICAxNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMjE1LFxuICAgICAgMTI1LFxuICAgICAgODgsXG4gICAgICAxNDEsXG4gICAgICA4OSxcbiAgICAgIDE3MSxcbiAgICAgIDE4MSxcbiAgICAgIDk5LFxuICAgICAgMTUsXG4gICAgICAxMixcbiAgICAgIDIxLFxuICAgICAgMzUsXG4gICAgICAyNDEsXG4gICAgICA3OSxcbiAgICAgIDEyMCxcbiAgICAgIDEwMixcbiAgICAgIDE0OCxcbiAgICAgIDg3LFxuICAgICAgMTcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIk1BVjQzN0pEXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MjYwNDQyOTA6NTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI0ODU0NTk0OTA0OTA1Njo1OUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLimZTqp4HEtsOKw5HDmMOHSMSU6qeC4pmUXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU91cEw4REVJdlg4YklHR0FVZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvUjI2MjRyNkxpMTZLMWV5OUJIZS81YThCS1NGUEVkVCtBY0piS3hvRFFBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlVxMHVyN2RBaE54UTdzZnVna0VHYlAyZzNXSEFqemhFTW9zQ2h4djFRTllCL3ZCUFQ1VzJpd0Q5dDZ1OUxGZjhmRXB3aWtEUmpuRDByQmJQOXlTaER3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlV3WDJYVTZZYlU1R0RlVTZnRW9VMzd3OWtvcEpSaG1Vdm1LM2c3eWJNRlN5WUNhTVFiS2R6UnZPRmZlTnlYM29oTDVBOGhGU1c2R0tTamJOdzUyV0NnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcyNjA0NDI5MDo1OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzMzMjg4MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUpYVFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSlhULmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEszVXpTdVFFT0ZZVGllNXVTdkRjRXJtZWw1MjFjQUVlWnBIa2c3OG11ST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo5MzgwMjI3MTQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


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
