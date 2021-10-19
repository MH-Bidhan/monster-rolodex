const monstersData = [
  {
    id: "1",
    name: `Mummy`,
    catchPhrase: `Dead Pheroh`,
    description: `Raised by dark funerary rituals and still wrapped in the shrouds of death, mummies shamble out from lost temples and tombs to slay any who disturb their rest.
        `,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Mummy.webp?alt=media&token=a474cabb-039c-4153-ba77-1074d1c0b3da`,
  },

  {
    id: "2",
    name: `Frankenstein`,
    catchPhrase: `Mad Doctor's Creation`,
    description: `The monster is Victor Frankenstein’s creation, assembled from old body parts and strange chemicals, animated by a mysterious spark. He enters life eight feet tall and enormously strong but with the mind of a newborn. Abandoned by his creator and confused, he tries to integrate himself into society, only to be shunned universally.
    `,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Fankenstein.webp?alt=media&token=1b3142f1-a100-4853-9508-8185a3089d5f`,
  },

  {
    id: "3",
    name: `Kraken`,
    catchPhrase: `Horror Of The Sea`,
    description: `The kraken is a legendary sea monster of gigantic size and cehalopod-like appearance in Scandinavian folklore. According to the Norse seas, the kraken dwells off the coasts of Norway and Greenland and terrorizes nearby sailors.
        `,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Kraken.webp?alt=media&token=ad17cdd0-3027-40c6-9bf7-7305abfbe382`,
  },
  {
    id: "4",
    name: `Nine Tailed Fox`,
    catchPhrase: `The Demon Fox`,
    description: `Nine Tailed Fox There is a beast whose appearance resembles a fox. It has four feet and nine tails, and makes a sound like a baby. Wisdom and power fill its tail with a new one growing every 100 years. After a millennium on Earth, the worthy fox may ascend to the Heavens and join the gods. That is the nine-tailed fox, a deity beast appearing alongside Xi Wangmu  with the Rabbit, the Toad, and the Three-foot Blue Bird.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Nine%20Tails.webp?alt=media&token=d2b10c83-4202-4f9c-bb58-f80ca4234e59`,
  },

  {
    id: "5",
    name: `Medusa`,
    catchPhrase: `The Cursed Woman`,
    description: `Medusa  also called Gorgo, was one of the three monstrous Gorgons, generally described as winged human females with living venomous snakes in place of hair. Those who gazed into her eyes would turn to stone. `,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Medusa.webp?alt=media&token=674c0547-b787-4c95-9118-dd7262e44275`,
  },

  {
    id: "6",
    name: `Zombie`,
    catchPhrase: `The Undead`,
    description: `A zombie is a mythical dead person who has returned to life as a walking corpse. Mythical things that have been "re-animated" are called undead, and a group of them can be called the living dead.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Zombie.webp?alt=media&token=a7da3a83-ea6a-486a-b1f8-8064a6e40114`,
  },

  {
    id: "7",
    name: `Were Wolf`,
    catchPhrase: `Wolf Of The Blood Moon`,
    description: `A werewolf, is a human with the ability to shapeshift into a wolf, either purposely or after being placed under a curse or affliction with the transformations occurring on the night of a full moon.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Ware%20Wolf.webp?alt=media&token=304d9cfe-f463-4baa-a443-996b08a99842`,
  },

  {
    id: "8",
    name: `Grim Reaper`,
    catchPhrase: `The Courier DEATH`,
    description: `The Grim Reaper is a spectral entity that is said to be the sentient manifestation of Death itself. Since the 15th century, Death has commonly been perceived to be an animated human skeleton, draped in pitch black robes and carrying a scythe. With this scythe, the Reaper severs the soul's last ties to life and grants the soul safe passage to the afterlife.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Reaper.webp?alt=media&token=2efa7564-2233-4b41-adac-9984cda99626`,
  },

  {
    id: "9",
    name: `Hydra`,
    catchPhrase: `The Dragon Of Many Heads`,
    description: `Hydra, a powerful dragon with multiple heads. The Hydra(Draco hydra.), uniquely amongst the dragons, reproduces by splitting heads off from its body. This only happens after the Hydra is several hundred years old. The head will be cared for by its "parents" for a year, if they do not have a bout of forgetfulness.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Hydra.webp?alt=media&token=f8a5416f-9746-4bcb-b541-cab03dde4af1`,
  },

  {
    id: "10",
    name: `Goblin`,
    catchPhrase: `Masters Of Staeling`,
    description: `Goblins are small, black-hearted humanoids that lair in despoiled dungeons and other dismal settings. Individually weak, they gather in large numbers to torment other creatures.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Goblin.webp?alt=media&token=35d6d069-a13a-4bc1-926d-cdc04d33a186`,
  },
  {
    id: "11",
    name: `Dracula`,
    catchPhrase: `Prince Of Darkness`,
    description: `Vlad was a little psychotic and regularly took to having his dinning table placed outside near the dying so that he could watch the show whilst having dinner. On one occasion there were so many impaled enemies hanging around that the area became known as the “Forest of the Impaled”.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Dracula.webp?alt=media&token=bcad04fa-150d-4cf4-97ee-2c4d59100b6d`,
  },

  {
    id: "12",
    name: `Minotaur`,
    catchPhrase: `Man Bull`,
    description: `Minotaur, Greek Minotauros (“Minos's Bull”), in Greek mythology, a fabulous monster of Crete that had the body of a man and the head of a bull. ... It was the offspring of Pasiphae, the wife of Minos, and a snow-white bull sent to Minos by the god Poseidon for sacrifice.
        `,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Minotaur.webp?alt=media&token=af2588bd-fe0d-44af-866d-3569a40a5a84`,
  },

  {
    id: "13",
    name: `Mrs. Frankenstein`,
    catchPhrase: `Frankenstein's Wife`,
    description: `Frankenstein's Wife was created for the sole pupose
    of being Frankenstein's mate and give a meaning to Frankenstein's life `,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Mrs.%20Frankenstein.webp?alt=media&token=1d0da4d4-46e9-45f3-abac-98e63a6232c9`,
  },

  {
    id: "14",
    name: `Cyclops`,
    catchPhrase: `One Eye'd Beast`,
    description: `Greek legend and literature, any of several one-eyed giants to whom were ascribed a variety of histories and deeds. In Hesiod the Cyclopes were three sons of Uranus and Gaea—Arges, Brontes, and Steropes (Bright, Thunderer, Lightener)—who forged the thunderbolts of Zeus.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Cyclopes.webp?alt=media&token=65337f0a-51d3-41bf-9070-41406d88836a`,
  },

  {
    id: "15",
    name: `Hippogriff`,
    catchPhrase: `Symbol Of Royalty`,
    description: `Hippogriff, a legendary animal that has the foreparts of a winged griffin and the body and hindquarters of a horse. The creature was invented by Ludovico Ariosto in his Orlando furioso and was based on a proverbial phrase about crossing a griffin with a horse that was used to signify an impossibility or incongruity.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Griffin.webp?alt=media&token=f2ef9e3a-f120-4c5e-9e44-69a68b6c85dc`,
  },

  {
    id: "16",
    name: `Cerberus`,
    catchPhrase: `Guard Of The Gates Of The Underworld`,
    description: `Greek mythology, Cerberus  often referred to as the hound of Hades, is a multi-headed dog that guards the gates of the Underworld to prevent the dead from leaving.`,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/fir-f9394.appspot.com/o/Cerberus.webp?alt=media&token=f9c04a20-63e7-4abe-8eec-177627109d55`,
  },
];

export default monstersData;
