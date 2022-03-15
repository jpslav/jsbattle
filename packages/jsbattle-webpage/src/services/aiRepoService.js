import {attachFetch} from '../lib/fetchFromApi.js';

const serviceDelay = 10;
const tankNames = ["aardvark","absence","achlys","adams","admiral","adoi","aevrits","afghanite","agate","agustinia","aidrum","akashiya","albatros","alexandrite","alligator","almas","alpaca","alpha","aluminium","alvarez","amazonite","amber","amelia","amethyst","ametrine","amighost","amih","ammolite","ampere","ananke","andalusite","anderson","andrews","ankylosaurus","anonymous","ant","anteater","antelope","antler","anzu","aorun","apatite","ape","aphrodite","aplese","apollo","aquamarine","aquasp","araragi","ares","argon","aristotle","arm","armstrong","arnold","aromaster","arrow","arsenic","artemis","aspect","asprince","astrodon","athena","atlas","atom","austin","avatar","aventurine","avila","azure","azurite","baboon","back","baitsua","baker","bakula","balaur","bandroid","bane","barber","bard","barlow","barnes","barnett","baroqueen","barracuda","barrett","barton","basil","bastnasite","bat","bathory","beads","beak","bear","bearry","beaver","beck","bee","beetle","belcourt","bell","belly","belmont","benefici","benitoite","bennett","berry","beryl","beryllium","beta","bethany","binder","bird","bishop","bison","bite","biter","black","blackmamba","blackwood","blazebra","bloodstone","blue","boa","boar","bolt","bone","boot","booth","boron","bow","bowden","boyle","bracelet","bradley","braid","brando","bravo","bray","brightdawn","bromine","broncoco","brow","brown","brunestud","buckley","buffalo","bug","bull","bunny","burgess","burke","burn","burns","burrell","burst","burton","butterfly","byrne","caesium","calcite","calcium","caldwell","camel","camperor","canary","candela","candroid","cap","capella","captain","capybara","caracal","carbon","cardiodon","carey","carnelian","carp","carpenter","carpet","carroll","caruso","carver","casey","cassidy","cat","catcher","cavansite","centaur","ceratops","chalcedony","chambers","chameleon","chanter","chaos","charger","charlie","charoite","chatter","chavez","cheetah","chen","cherry","chest","chi","chill","chiller","chimpanzee","chin","chipmunkey","chlorine","choker","chomdam","chopper","chromium","chronos","chrysoberyl","chrysocolla","chrysoprase","chuldel","citipati","citrine","claw","cloak","cloud","cobalt","cobra","cockatoo","cockroach","coelurus","coeus","coillness","cole","collar","collins","colossubs","comet","condor","congo","conjurer","conner","conquerry","copernicus","copper","coral","cormel","cortez","cosmos","costrite","cotton","cougar","count","cowl","cox","coyote","crab","crafter","craig","craikath","crane","crawfield","crepsley","crest","crex","crick","crius","crocodile","cross","crotchet","crow","crown","crurroid","crusher","cruz","crypto","cryptonic","crystal","cub","cuckoo","curtain","daemonk","dagger","damaskinos","danburite","dancer","daniel","dart","darwin","david","davies","davinci","davis","death","decibel","decorsair","deer","delgado","delta","demeter","demonkey","devourer","dexter","diamonds","diaspore","dingopher","dingwaange","dione","dionysus","dioptase","dirsejun","dive","diver","dog","dolgrads","dolphin","domot","donkey","doom","dorin","dornez","dove","doyle","dracorex","dragon","drake","dread","dream","drifter","drop","druzy","duck","duffy","duke","duskunk","dutchess","duval","eagle","eater","echo","edge","edgington","edison","eihmis","einstein","elephant","elf","elilm","elizabeth","elk","emerald","emily","emoo","empire","emutant","enchanted","eos","epsilon","erebus","eta","eudialyte","evans","eye","face","fairy","falcon","family","fancier","fang","farad","faraday","farmer","ferenczy","ferguson","fermi","ferret","fiendure","fier","fighter","figueroa","fin","finger","fire","fish","fisher","fitzroy","flame","flamingo","flare","flash","fleming","flier","flowers","flowright","fluke","fluorine","fluorite","fly","foe","follower","foot","force","forger","forrest","fox","foxtrot","freeman","french","friend","fright","frill","frog","frost","fuchsite","gaasohtu","gagnon","galactic","galileo","gallagher","gallium","gambler","gamma","gargoyle","garnet","garrett","garrison","gazelle","gecko","gelbero","gem","gentlelaws","george","germanium","ghankrins","gibson","ginger","giraffe","giver","glass","glazer","glory","gnu","gnunou","goat","gobling","gold","golf","goliatlas","goose","goqets","gorch","gorilla","gorrilag","goseottel","grabber","grant","grasp","grasshopper","graves","green","gricuenta","griffin","griffith","griminal","grin","gross","gruds","guardian","gull","guru","hackmanite","hades","hair","hall","halme","hamilton","hamster","hancock","hand","hannigan","hardy","hare","harris","hateful","hawk","hawking","hazlenut","head","healer","heliodor","helios","helium","hematite","hemera","hemors","hephaestus","hera","hermes","hero","herogue","heron","herrera","herrick","hertz","hestia","hexing","heydrich","hicks","hiddenite","hide","higgins","hihleh","hippo","hippolice","hiss","hisser","hoarumbo","hogan","holt","hoof","hooke","hopkins","horn","hornet","horse","hound","howard","howler","howlite","hugger","hughes","hummingbird","hunter","hutchinson","hwon","hydrogen","hyena","hyperion","hypnos","ibis","ichijou","iddun","igae","iguana","ikzals","impala","impossible","indie","indium","iodine","iolite","iridium","irojo","iron","ironstone","irzeah","iscariot","isla","ivory","jackal","jacob","jade","jaguar","jasper","jaw","jay","jeglalt","jellyfish","jerboa","jeremejevite","jester","jimenez","jinx","joanne","johnston","jones","joonkio","jordan","joule","jovian","judgenie","juliet","jupiter","kakuru","kangaroo","kanti","kappa","keeper","kelvin","kennedy","kent","khaan","kicker","killer","kilo","kimognome","king","kitten","klein","knave","knife","knight","koala","koeivua","kowalski","krypton","kunzite","kuran","kyanite","labradorite","lacroix","lady","lamaster","lambda","lancer","lang","lantern","lapwing","larimar","larson","lasher","latignome","lava","lawson","lazurite","leader","leg","legend","legs","lekyu","lemon","lemur","leopard","lepidolite","lepidus","lifter","lighter","lightning","lima","lime","link","lion","lithium","lizard","llama","lobster","lofah","logan","loon","lord","lowe","lukmek","luna","lykan","lynn","lynx","lyrebird","maaka","madison","maestro","magenta","magnesium","magnetite","magpie","malachite","maldul","malone","malpho","mammoth","mandrill","mann","mantissue","mare","margaret","margay","mark","marquez","mars","marshall","martin","mask","maslin","master","mccann","mccobb","mcdaniel","mcgee","mckinney","mckittrick","megalodon","megaraptor","mejia","mekong","mephin","mercury","meteorite","michael","middleton","mikaelson","miles","mind","mink","minnow","mint","mississippi","mistress","mitchell","moimbia","moldavite","mole","mongoose","monkey","moonlight","moonstone","moore","moose","more","morgan","morganite","morris","mortal","morton","mosquito","moss","moth","mouse","mueller","mukami","mukrea","munoz","muntuhloa","murphy","muse","mustang","myth","nape","naroll","navy","naylor","neck","nemesis","neon","neptune","nerzoill","newlin","news","newton","nguloani","nguyen","nichols","nickel","night","nightmare","nightowl","nigwoando","nihnae","nike","nile","nindista","ninja","niobium","nitrogen","nobel","nobody","noqrik","norman","nose","nowak","nuit","nundreok","nupifresh","nyx","obrien","obscene","obsidian","ocelot","ocelotus","octopus","ogre","ohm","okapi","oktul","olive","oliver","olivia","olson","omega","onyx","opalite","orange","oriole","ortega","orthoclase","oscar","osmium","otonashi","otter","oveids","override","owl","oxygen","oystrich","painter","paladin","palladium","palm","pandame","pandata","panther","paradox","park","parker","parrot","parsons","pascal","pasteur","pathfinder","patrick","patriode","paw","pearl","pegasus","pelican","pelicandy","pena","perez","peridot","perplex","petalite","peterson","phanes","phantomfool","phi","phobia","phoebe","phosphorus","pierce","pietersite","pig","pigeon","pignite","piper","pirate","pittman","pixelf","pixie","player","pollux","pope","porter","poseidon","potassium","powder","powell","powers","prake","prasiolite","pratt","prehnite","prince","princess","pristine","prometheus","proxima","psi","pteranodon","pufferfish","puma","puppy","purple","pyrite","python","qankreol","qegnors","qhulxuds","qogu","quad","quake","quartz","quebec","queen","quester","quicksilver","rabbit","raccoon","racer","rachimova","radcliff","rae","raine","rambova","ramsey","rapator","raptor","raptortilla","rat","raven","raventops","raver","ray","razor","reaper","recovery","red","redbird","redux","reed","reid","rhea","rhino","rhodes","rhodochrosite","rhodonite","rhyolite","rib","rice","richard","richardson","rider","ridge","rigel","riley","ringer","rinseld","ripper","ritual","roach","roar","roarer","roberts","robertson","robin","robinson","rodgers","rogers","romanus","romeo","ross","rover","roverseer","royal","rubidium","ruby","rune","runner","rusal","saber","sage","sailord","salamander","salazar","salmon","samantha","samarium","samurai","sanchez","sand","sandoval","santiago","sapphire","sardine","sargent","saunders","saushkin","saver","scaakkels","scale","scandium","scapolite","scar","scarabyte","scarer","scarlet","scencuns","scepter","schmidt","scorpion","scourge","scout","scowl","scox","scribe","seahorse","seal","sealectric","sealixir","seed","seeker","seer","segnos","selene","selenite","selenium","selgrell","sentry","sepperin","septarian","seraphinite","serpent","serpentine","servant","shadept","shadow","shaker","shark","sharma","shatterdeath","sheep","shell","shepherd","shield","shift","shirt","shoondia","shoulder","shriek","shrieker","shuzen","sidhi","siege","sierra","sight","sigma","silicon","sillimanite","silva","silver","singer","singh","sirius","skinner","skull","slave","slayer","slicer","sloth","smith","smyth","snagglefoot","snail","snake","snap","snapper","snarl","sniperks","snout","snow","soarer","sodalite","sodium","song","sorcery","sorel","soto","souen","sparrow","speaker","spear","specter","spectrolite","spencer","sphalerite","sphene","sphinx","spider","spiderby","spike","spinel","spirit","spiteri","spodumene","sprite","spur","squid","squirrel","stag","stalker","stallion","starling","stealer","stealth","stephens","stewart","stichtite","sting","stinger","stone","stonefish","stork","storm","strontium","styx","sugilite","sulfur","sumogre","sunstar","sunstone","sutton","swallow","swan","swisher","swoop","sword","synergy","taabombe","tail","taker","talbot","talisman","talon","tango","tanzanite","tapir","tartarus","tate","taylor","tektite","tempting","tepes","terbium","termight","terran","terrier","terry","tesla","thalassa","thanatos","theia","themis","theta","thief","thomas","thorn","throat","thumb","thunder","tiger","titanium","toad","toe","tongue","tooth","topaz","topi","torrent","totemperor","toucan","toucannon","touch","tourmaline","toussaint","tracer","track","tracker","trader","tremolite","tremor","triceratops","triphane","tudalm","turkey","turkiyenite","turner","turquoise","turtle","twining","twist","twister","tyrannosaurus","tyson","ujuveo","ukeons","umbra","unbandit","unicorn","uniform","unneds","uqnan","uranus","urnang","utahraptor","uviets","vachuoei","valencia","valentino","van","vanadium","vanga","variscite","vasquez","vector","veembot","vega","veidhuk","velociraptor","venom","venus","ver","verdite","vertighost","veteran","vichou","violet","viper","voice","voldaren","vole","volga","volt","voncarstien","vonphain","voodoo","voyage","vrakzeits","vulture","wagner","waingemba","walker","wallace","walsh","walton","wanderer","ward","warlock","warrior","warthog","wasp","watcher","water","waters","watkins","watson","watt","weasel","weaver","webb","weber","webster","weed","welch","westenra","whale","whimsey","whip","white","whitehouse","whiz","william","williams","willis","wilson","wing","winters","witch","witcher","wizard","wolf","wolverine","worm","wraith","wyrm","xenon","xerus","yak","yakar","yandud","yangtze","yigno","yuayu","yukon","yurils","zachs","zebra","zebrag","zebrawl","zeta","zeus","zigzag","zimmerman","zinc","zircon","zoisite","zosca","zulu"];

function isNameAllowed(name) {
  const namespace = 'scriptMap';
  if(name.length < 3) return false;
  let storedScripts = localStorage.getItem(namespace);
  let scriptMap = storedScripts ? JSON.parse(storedScripts) : {};
  return !scriptMap[name];
}

function createScriptWithName(name) {
  const namespace = 'scriptMap';
  let storedScripts = localStorage.getItem(namespace);
  let scriptMap = storedScripts ? JSON.parse(storedScripts) : {};
  if(Object.keys(scriptMap).length >= 20) {
    throw new Error('Script limit exceeded');
  }
  if(!isNameAllowed(name)) {
    throw new Error("Name " + name + " is not allowed for AI script");
  }
  let script = {
    name: name,
    code: "importScripts('lib/tank.js');\n\n// Don't know where to start?\n// Read Getting Started in \"Docs\" section \n\ntank.init(function(settings, info) {\n\t// initialize tank here\n  \n});\n\ntank.loop(function(state, control) {\n\t// write your tank logic here\n  \n});\n\n\n"
  };
  scriptMap[name] = script;
  localStorage.setItem(namespace, JSON.stringify(scriptMap));
  return script;
}

function getRandomScriptName() {
  return tankNames[Math.floor(Math.random() * tankNames.length)].toLowerCase();
}

function existsScript(name) {
  const namespace = 'scriptMap';
  let storedScripts = localStorage.getItem(namespace);
  let scriptMap = storedScripts ? JSON.parse(storedScripts) : {};
  return scriptMap[name] != undefined;
}

export const getScript = async (id) => {
  const namespace = 'scriptMap';
  let name = id.replace(/^local_/, '');
  await new Promise((resolve) => setTimeout(resolve, serviceDelay));
  if(!existsScript(name)) {
    throw new Error("Script '" + name + "' does not exist");
  }
  let storedScripts = localStorage.getItem(namespace);
  let scriptMap = storedScripts ? JSON.parse(storedScripts) : {};
  if(!scriptMap[name]) {
    throw new Error("Script '" + name + "' does not exist");
  }
  let result = JSON.parse(JSON.stringify(scriptMap[name]));
  return {
    id: 'local_' + result.name,
    scriptName: result.name,
    code: result.code
  };
};

export const createScript = async (suggestedName) => {
  await new Promise((resolve) => setTimeout(resolve, serviceDelay));
  let name = suggestedName || getRandomScriptName();
  let retry = 0;
  while(!isNameAllowed(name)) {
    name = getRandomScriptName();
    retry++;
    if(retry > 100) {
      throw new Error("Cannot find unique name for the script");
    }
  }
  return createScriptWithName(name);
};

export const renameScript = async (newValue, id) => {
  const namespace = 'scriptMap';
  await new Promise((resolve) => setTimeout(resolve, serviceDelay));
  let oldValue = id.replace(/^local_/, '');
  if(newValue.length < 3) {
    throw new Error(`Wrong script name. Script name must be at least 3 characters long`);
  }
  if(newValue.length >= 16) {
    throw new Error(`Wrong script name. Script name must be less than 16 characters long`);
  }
  if(existsScript(newValue)) {
    throw new Error(`Wrong script name. Script '${newValue}' already exists. The name must be unique`);
  }
  if(!((/^[A-Za-z0-9_-]+$/).test(newValue))) {
    throw new Error(`Wrong script name. Allowed characters are A-Z, a-z, 0-9, _, -`);
  }

  let storedScripts = localStorage.getItem(namespace);
  let scriptMap = storedScripts ? JSON.parse(storedScripts) : {};
  if(!scriptMap[oldValue]) {
    throw new Error("Script " + oldValue + " does not exist");
  }
  let newScriptMap = {};
  let names = Object.keys(scriptMap);
  for(let name of names) {
    if(name != oldValue) {
      newScriptMap[name] = scriptMap[name];
    }
  }
  newScriptMap[newValue] = scriptMap[oldValue];
  newScriptMap[newValue].name = newValue;
  localStorage.setItem(namespace, JSON.stringify(newScriptMap));
  return {
    id: 'local_' + newValue,
    scriptName: newValue
  };
};

export const getScriptNameList = async () => {
  const namespace = 'scriptMap';
  await new Promise((resolve) => setTimeout(resolve, serviceDelay));
  let storedScripts = localStorage.getItem(namespace);
  let scriptMap = storedScripts ? JSON.parse(storedScripts) : {};
  let result = [];
  for(let i in scriptMap) {
    result.push(i);
  }
  result = result.map((name) => ({
    id: 'local_' + name,
    scriptName: name
  }));
  return result;
};

export const updateScript = async (id, code) => {
  const namespace = 'scriptMap';
  await new Promise((resolve) => setTimeout(resolve, serviceDelay));
  let name = id.replace(/^local_/, '');
  let storedScripts = localStorage.getItem(namespace);
  let scriptMap = storedScripts ? JSON.parse(storedScripts) : {};
  if(!scriptMap[name]) {
    throw new Error("Script " + name + " does not exists");
  }
  scriptMap[name].code = code;
  localStorage.setItem(namespace, JSON.stringify(scriptMap));
  return {
    id, name, code, namespace
  };
};

export const deleteScript = async (id) => {
  const namespace = 'scriptMap';
  await new Promise((resolve) => setTimeout(resolve, serviceDelay));
  let name = id.replace(/^local_/, '');
  let storedScripts = localStorage.getItem(namespace);
  let scriptMap = storedScripts ? JSON.parse(storedScripts) : {};
  let newMap = {};
  for(let i in scriptMap) {
    if(i == name) continue;
    newMap[i] = scriptMap[i];
  }
  localStorage.setItem(namespace, JSON.stringify(newMap));
};

export default {
  getScriptNameList: attachFetch(getScriptNameList, () => {
    return [];
  }),
  createScript: attachFetch(createScript, (request) => {
    return [request.body.scriptName || null];
  }),
  deleteScript: attachFetch(deleteScript, (request) => {
    return [request.uriElements[request.uriElements.length-1]];
  }),
  getScript: attachFetch(getScript, (request) => {
    return [request.uriElements[request.uriElements.length-1]];
  }),
  updateScript: attachFetch(updateScript, (request) => {
    return [
      request.uriElements[request.uriElements.length-1],
      request.body.code
    ];
  }),
  renameScript: attachFetch(renameScript, (request) => {
    return [
      request.body.scriptName,
      request.uriElements[request.uriElements.length-1]
    ];
  })
};
