import blessIcon from '../../../assets/gameplay/blessIcon.png';
import sporeIcon from '../../../assets/gameplay/sporeIcon.png';
import rebootIcon from '../../../assets/gameplay/rebootIcon.png';
import focusIcon from '../../../assets/gameplay/focusIcon.png';
import gameCycle from '../../../assets/gameplay/gameCycle.png';
import craft from '../../../assets/gameplay/craft.png';

export const infoAnnotation = {
  worldTitle: {
    title: 'World of BattleVerse',
    text: `To enter the Battleverse you need an NFT character, first of all.
        There are two types of NFT characters: Shroom and Bot. In future
        updates, our team will release new races and you will be able to
        choose from various characters.`,
  },
  rarityTitle: {
    title: 'Rarity',
    text: 'After you buy an NFT character (Bot or Shroom), you receive unique characters with different attribute rarity. It depends on starting Power rating.',
  },
  attrTitle: {
    title: 'Rarity attributes list',
    text: 'Attributes value depends on the rarity',
  },
  skillsTitle: {
    title: 'Skills',
    text: 'Every race (Bot or Shroom) has special abilities. These abilities help your character to win in PvP or PvE battles. Bots or Shrooms have two unique skills per race.',
  },
  upgradeTitle: {
    title: 'Upgrade',
    text: `Every hero has 3 main attributes — Attack, Defense, and Trick. You will improve these attributes after hero level-up.`,
    text2:
      'After level-up, you will receive some Attribute Points (AP). You may use AP to improve Attack, Defense, and Trick OR (and it’s important) sell it on the Marketplace. AP is some kind of resource like Energy or QZQ. You may not only use it in-game. AP is a valuable resource, so be careful with them!',
    text3:
      'To improve an attribute, you need to spend 1 AP. After that pay some QZQ or QZQ+BVC. It depends on the level of the chosen attribute. And the last step — time. Attribute improvement is not an immediate process and is counted in hours. More level — more hours to wait. You may spend some QZQ to skip this step.',
  },
};
export const skills = {
  firstPart: {
    title: 'Bot’s Skills:',
    infoPart: [
      {
        title: 'System Focus',
        text: 'Bot aiming systems focus on the target to make a precise shot. Causes 20 damage.',
        img: focusIcon,
      },
      {
        title: 'Total Reboot',
        text: 'Repair protocols restore 10 of health at the end of each turn.',
        img: rebootIcon,
      },
    ],
  },
  secondPart: {
    title: 'Shroom’s skills:',
    infoPart: [
      {
        title: 'Spore injection',
        text: 'Rage outburst that increases damage from a successful attack by 45%.',
        img: sporeIcon,
      },
      {
        title: 'Bless of Mother Fungus',
        text: 'Praying in the name of Mother Fungus restores 20 hp',
        img: blessIcon,
      },
    ],
  },
};
export const infoGameMode = {
    gameTitle: {
      title: 'Game cycle',
      text: 'Scheme shows the full game cycle and displays how every part of the game is connected to each other',
      img: gameCycle
    },
    craftTitle: {
      title: 'Craft',
      text: 'How you can get resources and how you can use them',
      img: craft
    },
    craftCycleTitle: {
      title: 'Craft cycle',
      text: 'Every race (Bot or Shroom) has special abilities. These abilities help your character to win in PvP or PvE battles. Bots or Shrooms have two unique skills per race.',
      img: craft
    }
}
