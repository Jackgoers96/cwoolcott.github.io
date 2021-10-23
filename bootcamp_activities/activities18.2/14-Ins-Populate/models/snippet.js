//link 
let links = {
    GOOGLE_PLAY_STORE: {
        primary: {
            WEBSITE_LINK: {
                url: 'https://spacebones.io/leaderboard'
            }
        }
    },
    IOS_APP_STORE: {
        primary: {
            WEBSITE_LINK: {
                url: 'https://spacebones.io/leaderboard'
            }
        }
    }
};


const topic = "See the SpaceBones.IO Market";


return handlerInput.responseBuilder.addDirective(createAppLinkSkillConnection(links, topic, true)).getResponse();

function createAppLinkSkillConnection(linksPerCatalog, linkTopic, suppress = false) {
    return {
        type: "Connections.StartConnection",
        uri: "connection://AMAZON.LinkApp/2",
        input: {
            links: linksPerCatalog,
            prompt: {
                topic: linkTopic,
                directLaunchDefaultPromptBehavior: suppress ? "SUPPRESS" : "SPEAK"
            }
        }
    }
}
