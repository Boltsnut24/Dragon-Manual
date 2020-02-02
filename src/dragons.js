const dragons = {
  "chromatic": {
    "black": {
      "wyrmling": {
        "challenge_rating": 2,
        "size": "medium",
        "alignment": "chaotic evil",
        "health": 33,
        "armor_class": 17,
        "speed": {
          "ground": 30,
          "swim": 30,
          "fly": 60
        },
        "ability_scores": {
          "strength": 15,
          "dexterity": 14,
          "constitution": 13,
          "intelligence": 10,
          "wisdom": 11,
          "charisma": 13
        },
        "saving_throws": {
          "strength": 2,
          "dexterity": 4,
          "constitution": 3,
          "intelligence": 0,
          "wisdom": 2,
          "charisma": 3
        },
        "skills": {
          "perception": 4,
          "stealth": 4
        },
        "damage_immunities": ["acid"],
        "senses": {
          "blindsight": 10,
          "darkvision": 60,
          "truesight": null,
          "passive_perception": 14
        },
        "languages": ["draconic"],
        "special_abilities": [
          {
            "name": "amphipbious",
            "description": "Amphibious: The dragon can breathe air and water."
          }
        ],
        "actions": [
          {
            "name": "Bite",
            "action_type": "Melee Weapon Attack",
            "description": "+4 to hit, reach 5 ft., one target, Hit: (1d10 + 2) piercing plus (1d4) acid damage."
          },
          {
            "name": "Acid Breath (Recharge 5-6)",
            "action_type": "Breath Attack",
            "description": "The dragon exhales acid in a 15-foot line that is 5 feet wide. Each creature in that line must make a DC 11 Dexterity Saving Throw, taking (5d8) acid damage on a failed save, or half as much damage on a successful one."
          }
        ],
        "spell_save_dc": 11,
        "spell_attack": 3,
        "spells": [
          {
            "spell_name": "Ray of Sickness",
            "spell_level": 1,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V, S",
            "duration": "instantaneous",
            "description": "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution Saving Throw, on a failed save, it is also poisoned until the end of your next turn."
          }
        ]
      },
      "young": {
        "challenge_rating": 7,
        "health": 127,
        "size": "large",
        "alignment": "chaotic evil",
        "armor_class": 18,
        "speed": {
          "ground": 40,
          "swim": 40,
          "fly": 80
        },
        "ability_scores": {
          "strength": 19,
          "dexterity": 14,
          "constitution": 17,
          "intelligence": 12,
          "wisdom": 11,
          "charisma": 15
        },
        "saving_throws": {
          "strength": 4,
          "dexterity": 5,
          "constitution": 6,
          "intelligence": 1,
          "wisdom": 3,
          "charisma": 5
        },
        "skills": {
          "perception": 6,
          "stealth": 5
        },
        "damage_immunities": ["acid"],
        "senses": {
          "blindsight": 30,
          "darkvision": 120,
          "truesight": null,
          "passive_perception": 16
        },
        "languages": ["common", "draconic"],
        "special_abilities": [
          {
            "name": "amphipbious",
            "description": "Amphibious: The dragon can breathe air and water."
          },
        ],
        "actions": [
          {
            "name": "Multiattack",
            "action_type": null,
            "description": "The dragon makes three attacks, one with its bite and two with its claws."
          },
          {
            "name": "Bite",
            "action_type": "Melee Weapon Attack",
            "description": "+7 to hit, reach 10 ft., one target, Hit: (2d10 + 4) piercing plus (1d8) acid damage."
          },
          {
            "name": "Claw",
            "action_type": "Melee Weapon Attack",
            "description": "+7 to hit, reach 5 ft., one target, Hit: (2d6 + 4) slashing damage."
          },
          {
            "name": "Acid Breath (Recharge 5-6)",
            "action_type": "Breath Attack",
            "description": "The dragon exhales acid in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 14 Dexterity Saving Throw, taking (11d8) acid damage on a failed save, or half as much damage on a successful one."
          }
        ],
        "spell_save_dc": 13,
        "spell_attack": 5,
        "spells": [
          {
            "spell_name": "Ray of Sickness",
            "spell_level": 1,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V, S",
            "duration": "instantaneous",
            "description": "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution Saving Throw, on a failed save, it is also poisoned until the end of your next turn."
          },
          {
            "spell_name": "Darkness",
            "spell_level": 2,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V",
            "duration": "Concentration, up to 10 minutes",
            "description": "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illumniate it. \n\tIf the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, bloock the darkness. \n\tIf any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
          },
          {
            "spell_name": "Stinking Cloud",
            "spell_level": 3,
            "casting_time": "1 action",
            "range": "90 feet",
            "components": "V, S",
            "duration": "Concentration, up to 1 minute",
            "description": "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.\n\tEach creature that is completely within the cloud at the start of its turn must make a Constitution Saving Throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.\n\tA moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
          },
        ]

      },
      "adult": {
        "challenge_rating": 14,
        "health": 195,
        "size": "huge",
        "alignment": "chaotic evil",
        "armor_class": 19,
        "speed": {
          "ground": 40,
          "swim": 40,
          "fly": 80
        },
        "ability_scores": {
          "strength": 23,
          "dexterity": 14,
          "constitution": 21,
          "intelligence": 14,
          "wisdom": 13,
          "charisma": 17
        },
        "saving_throws": {
          "strength": 6,
          "dexterity": 7,
          "constitution": 10,
          "intelligence": 2,
          "wisdom": 6,
          "charisma": 8
        },
        "skills": {
          "perception": 11,
          "stealth": 7
        },
        "damage_immunities": ["acid"],
        "senses": {
          "blindsight": 60,
          "darkvision": 120,
          "truesight": 30,
          "passive_perception": 21
        },
        "languages": ["common", "draconic"],
        "special_abilities": [
          {
            "name": "amphipbious",
            "description": "Amphibious: The dragon can breathe air and water."
          },
          {
            "name": "Legendary Resistance (3/Day)",
            "description": "If the dragon fails a saving throw, it can choose to succeed instead."
          }
        ],
        "actions": [
          {
            "name": "Multiattack",
            "action_type": null,
            "description": "The dragon can use its Frightful Presence. It then makes three attacks, one with its bite and two with its claws."
          },
          {
            "name": "Bite",
            "action_type": "Melee Weapon Attack",
            "description": "+11 to hit, reach 10 ft., one target, Hit: (2d10 + 6) piercing plus (1d8) acid damage."
          },
          {
            "name": "Claw",
            "action_type": "Melee Weapon Attack",
            "description": "+11 to hit, reach 5 ft., one target, Hit: (2d6 + 6) slashing damage."
          },
          {
            "name": "Tail",
            "action_type": "Melee Weapon Attack",
            "description": "+11 to hit, reach 15 ft., one target, Hit: (2d8 + 6) bludgeoning damage."
          },
          {
            "name": "Frightful Presence",
            "action_type": null,
            "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom Saving Throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
          },
          {
            "name": "Acid Breath (Recharge 5-6)",
            "action_type": "Breath Attack",
            "description": "The dragon exhales acid in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 18 Dexterity Saving Throw, taking (12d8) acid damage on a failed save, or half as much damage on a successful one."
          }
        ],
        "legendary_actions": [
          {
            "name": "Legendary Action Definition",
            "description": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
          },
          {
            "name": "Detect",
            "description": "The dragon makes a Perception check."
          },
          {
            "name": "Tail Attack",
            "description": "The dragon makes a tail attack."
          },
          {
            "name": "Wing Attack (Costs 2 Actions)",
            "description": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 19 Dexterity saving throw or take (2d6 + 6) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
          }
        ],
        "spell_save_dc": 16,
        "spell_attack": 8,
        "spells": [
          {
            "spell_name": "Ray of Sickness",
            "spell_level": 1,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V, S",
            "duration": "instantaneous",
            "description": "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution Saving Throw, on a failed save, it is also poisoned until the end of your next turn."
          },
          {
            "spell_name": "Darkness",
            "spell_level": 2,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V",
            "duration": "Concentration, up to 10 minutes",
            "description": "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illumniate it. \n\tIf the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, bloock the darkness. \n\tIf any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
          },
          {
            "spell_name": "Stinking Cloud",
            "spell_level": 3,
            "casting_time": "1 action",
            "range": "90 feet",
            "components": "V, S",
            "duration": "Concentration, up to 1 minute",
            "description": "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.\n\tEach creature that is completely within the cloud at the start of its turn must make a Constitution Saving Throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.\n\tA moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
          },
          {
            "spell_name": "Blight",
            "spell_level": 4,
            "casting_time": "1 action",
            "range": "30 feet",
            "components": "V, S",
            "duration": "Instantaneous",
            "description": "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution Saving Throw. The target takes 8d8 necrotic damage on a failed save, or half as much on a successful one. This spell has no effect on undead or constructs.\n\tIf you target a plant creature or a magical plant, it makes the saving throw iwth disadvantage, and the spell deals maximum damage to it.\n\tIf you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies."
          },
          {
            "spell_name": "Cloudkill",
            "spell_level": 5,
            "casting_time": "1 action",
            "range": "120 feet",
            "components": "V, S",
            "duration": "Concentration, up to 10 minutes",
            "description": "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around coreners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.\n\tWhen a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.\n\tThe fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even ouring down openings."
          },
        ]
      },
      "ancient": {
        "challenge_rating": 21,
        "health": 367,
        "size": "gargantuan",
        "alignment": "chaotic evil",
        "armor_class": 22,
        "speed": {
          "ground": 40,
          "swim": 40,
          "fly": 80
        },
        "ability_scores": {
          "strength": 27,
          "dexterity": 14,
          "constitution": 25,
          "intelligence": 16,
          "wisdom": 15,
          "charisma": 19
        },
        "saving_throws": {
          "strength": 8,
          "dexterity": 9,
          "constitution": 14,
          "intelligence": 3,
          "wisdom": 9,
          "charisma": 11
        },
        "skills": {
          "perception": 16,
          "stealth": 9
        },
        "damage_immunities": ["acid"],
        "senses": {
          "blindsight": 60,
          "darkvision": 120,
          "truesight": 60,
          "passive_perception": 26
        },
        "languages": ["common", "draconic"],
        "special_abilities": [
          {
            "name": "amphipbious",
            "description": "Amphibious: The dragon can breathe air and water."
          },
          {
            "name": "Legendary Resistance (3/Day)",
            "description": "If the dragon fails a saving throw, it can choose to succeed instead."
          }
        ],
        "actions": [
          {
            "name": "Multiattack",
            "action_type": null,
            "description": "The dragon can use its Frightful Presence. It then makes three attacks, one with its bite and two with its claws."
          },
          {
            "name": "Bite",
            "action_type": "Melee Weapon Attack",
            "description": "+15 to hit, reach 15 ft., one target, Hit: (2d10 + 8) piercing plus (2d8) acid damage."
          },
          {
            "name": "Claw",
            "action_type": "Melee Weapon Attack",
            "description": "+15 to hit, reach 15 ft., one target, Hit: (2d6 + 8) slashing damage."
          },
          {
            "name": "Tail",
            "action_type": "Melee Weapon Attack",
            "description": "+15 to hit, reach 20 ft., one target, Hit: (2d8 + 8) bludgeoning damage."
          },
          {
            "name": "Frightful Presence",
            "action_type": null,
            "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom Saving Throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
          },
          {
            "name": "Acid Breath (Recharge 5-6)",
            "action_type": "Breath Attack",
            "description": "The dragon exhales acid in a 90-foot line that is 10 feet wide. Each creature in that line must make a DC 22 Dexterity Saving Throw, taking (15d8) acid damage on a failed save, or half as much damage on a successful one."
          }
        ],
        "legendary_actions": [
          {
            "name": "Legendary Action Definition",
            "description": "The dragon can take 3 legendary actions, choosing from the options below. Only one legendary action option can be used at a time and only at the end of another creature's turn. The dragon regains spent legendary actions at the start of its turn."
          },
          {
            "name": "Detect",
            "description": "The dragon makes a Perception check."
          },
          {
            "name": "Tail Attack",
            "description": "The dragon makes a tail attack."
          },
          {
            "name": "Wing Attack (Costs 2 Actions)",
            "description": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 23 Dexterity saving throw or take (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
          }
        ],
        "spell_save_dc": 18,
        "spell_attack": 10,
        "spells": [
          {
            "spell_name": "Ray of Sickness",
            "spell_level": 1,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V, S",
            "duration": "instantaneous",
            "description": "A ray of sickening greenish energy lashes out toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution Saving Throw, on a failed save, it is also poisoned until the end of your next turn."
          },
          {
            "spell_name": "Darkness",
            "spell_level": 2,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V",
            "duration": "Concentration, up to 10 minutes",
            "description": "Magical darkness spreads from a point you choose within range to fill a 15-foot-radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illumniate it. \n\tIf the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, bloock the darkness. \n\tIf any of this spell's area overlaps with an area of light created by a spell of 2nd level or lower, the spell that created the light is dispelled."
          },
          {
            "spell_name": "Stinking Cloud",
            "spell_level": 3,
            "casting_time": "1 action",
            "range": "90 feet",
            "components": "V, S",
            "duration": "Concentration, up to 1 minute",
            "description": "You create a 20-foot-radius sphere of yellow, nauseating gas centered on a point within range. The cloud spreads around corners, and its area is heavily obscured. The cloud lingers in the air for the duration.\n\tEach creature that is completely within the cloud at the start of its turn must make a Constitution Saving Throw against poison. On a failed save, the creature spends its action that turn retching and reeling. Creatures that don't need to breathe or are immune to poison automatically succeed on this saving throw.\n\tA moderate wind (at least 10 miles per hour) disperses the cloud after 4 rounds. A strong wind (at least 20 miles per hour) disperses it after 1 round."
          },
          {
            "spell_name": "Blight",
            "spell_level": 4,
            "casting_time": "1 action",
            "range": "30 feet",
            "components": "V, S",
            "duration": "Instantaneous",
            "description": "Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution Saving Throw. The target takes 8d8 necrotic damage on a failed save, or half as much on a successful one. This spell has no effect on undead or constructs.\n\tIf you target a plant creature or a magical plant, it makes the saving throw iwth disadvantage, and the spell deals maximum damage to it.\n\tIf you target a nonmagical plant that isn't a creature, such as a tree or shrub, it doesn't make a saving throw; it simply withers and dies."
          },
          {
            "spell_name": "Cloudkill",
            "spell_level": 5,
            "casting_time": "1 action",
            "range": "120 feet",
            "components": "V, S",
            "duration": "Concentration, up to 10 minutes",
            "description": "You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around coreners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.\n\tWhen a creature enters the spell's area for the first time on a turn or starts its turn there, that creature must make a Constitution saving throw. The creature takes 5d8 poison damage on a failed save, or half as much damage on a successful one. Creatures are affected even if they hold their breath or don't need to breathe.\n\tThe fog moves 10 feet away from you at the start of each of your turns, rolling along the surface of the ground. The vapors, being heavier than air, sink to the lowest level of the land, even ouring down openings."
          },
          {
            "spell_name": "Circle of Death",
            "spell_level": 6,
            "casting_time": "1 action",
            "range": "150 feet",
            "components": "V, S",
            "duration": "Instantaneous",
            "description": "A sphere of negative energy ripples out in a 60-foot-radius from a point within range. Each creature in that area must make a Constitution saving throw. A target takes 8d6 necrotic damage ona failed save or half as much on a successful one."
          },
          {
            "spell_name": "Finger of Death",
            "spell_level": 7,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V, S",
            "duration": "Instantaneous",
            "description": "You send negative energy coursing throug ha creature that you can see within range, causing it searing pain. The target must make a Constitution Saving Throw. It takes 7d8 + 30 necrotic damage on a failed save, or half as much on a successful one.\n\tA humanoid killed by this spell rises at the start of your next turn as a zombie that is permanently under your command, following your verbal orders to the best of its ability."
          },
        ]
      }
    },
blue{

},
green{

},
red{

},
white{

}
  },
metallic{
  brass{

  },
  bronze{

  },
  copper{

  },
  gold{

  },
  silver{

  }
},
miscellaneous{

}
}