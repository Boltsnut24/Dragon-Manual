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
    "blue": {
      "wyrmling": {
        "challenge_rating": 3,
        "size": "medium",
        "alignment": "lawful evil",
        "health": 52,
        "armor_class": 17,
        "speed": {
          "ground": 30,
          "burrow": 15,
          "fly": 60
    },
        "ability_scores": {
          "strength": 17,
          "dexterity": 10,
          "constitution": 15,
          "intelligence": 12,
          "wisdom": 11,
          "charisma": 15
    },
        "saving_throws": {
          "strength": 3,
          "dexterity": 2,
          "constitution": 4,
          "intelligence": 1,
          "wisdom": 2,
          "charisma": 4
    },
        "skills": {
          "perception": 4,
          "stealth": 2
    },
        "damage_immunities": ["lightning"],
        "senses": {
          "blindsight": 10,
          "darkvision": 60,
          "truesight": null,
          "passive_perception": 14
    },
        "languages": ["draconic"],
        "special_abilities": [
          {
            "name": null,
            "description": null
      }
        ],
        "actions": [
          {
            "name": "Bite",
            "action_type": "Melee Weapon Attack",
            "description": "+5 to hit, reach 5 ft., one target, Hit: (1d10 + 3) piercing plus (1d6) lightning damage."
      },
          {
            "name": "Lightning Breath (Recharge 5-6)",
            "action_type": "Breath Attack",
            "description": "The dragon exhales lightning in a 30-foot line that is 5 feet wide. Each creature in that line must make a DC 12 Dexterity Saving Throw, taking (4d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
        ],
        "spell_save_dc": 12,
        "spell_attack": 4,
        "spells": [
          {
            "spell_name": "Expeditious Retreat",
            "spell_level": 1,
            "casting_time": "1 bonus action",
            "range": "self",
            "components": "V, S",
            "duration": "Concentration, up to 10 minutes",
            "description": "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
      }
        ]
      },
      "young": {
        "challenge_rating": 9,
        "health": 152,
        "size": "large",
        "alignment": "lawful evil",
        "armor_class": 18,
        "speed": {
          "ground": 40,
          "burrow": 20,
          "fly": 80
    },
        "ability_scores": {
          "strength": 21,
          "dexterity": 10,
          "constitution": 19,
          "intelligence": 14,
          "wisdom": 13,
          "charisma": 17
    },
        "saving_throws": {
          "strength": 5,
          "dexterity": 4,
          "constitution": 8,
          "intelligence": 3,
          "wisdom": 5,
          "charisma": 7
    },
        "skills": {
          "perception": 9,
          "stealth": 4
    },
        "damage_immunities": ["lightning"],
        "senses": {
          "blindsight": 30,
          "darkvision": 120,
          "truesight": null,
          "passive_perception": 19
    },
        "languages": ["common", "draconic"],
        "special_abilities": [
          {
            "name": null,
            "description": null
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
            "description": "+9 to hit, reach 10 ft., one target, Hit: (2d10 + 6) piercing plus (1d10) lightning damage."
      },
          {
            "name": "Claw",
            "action_type": "Melee Weapon Attack",
            "description": "+9 to hit, reach 5 ft., one target, Hit: (2d6 + 5) slashing damage."
      },
          {
            "name": "Lightning Breath (Recharge 5-6)",
            "action_type": "Breath Attack",
            "description": "The dragon exhales lightning in a 60-foot line that is 5 feet wide. Each creature in that line must make a DC 16 Dexterity Saving Throw, taking (10d10) lightning damage on a failed save, or half as much damage on a successful one."
      }
        ],
        "spell_save_dc": 15,
        "spell_attack": 7,
        "spells": [
          {
            "spell_name": "Expeditious Retreat",
            "spell_level": 1,
            "casting_time": "1 bonus action",
            "range": "self",
            "components": "V, S",
            "duration": "Concentration, up to 10 minutes",
            "description": "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
      },
          {
            "spell_name": "Blur",
            "spell_level": 2,
            "casting_time": "1 action",
            "range": "self",
            "components": "V",
            "duration": "Concentration, up to 1 minutes",
            "description": "Your body becomes blured, shifting and waverig to all who can see you for the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
      },
          {
            "spell_name": "Major Image",
            "spell_level": 3,
            "casting_time": "1 action",
            "range": "120 feet",
            "components": "V, S",
            "duration": "Concentration, up to 10 minute",
            "description": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20=foot-cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench).\n\tAs long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter is appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.\n\tPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Investigation check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature."
      }
        ]

      },
      "adult": {
        "challenge_rating": 16,
        "health": 225,
        "size": "huge",
        "alignment": "lawful evil",
        "armor_class": 19,
        "speed": {
          "ground": 40,
          "burrow": 30,
          "fly": 80
    },
        "ability_scores": {
          "strength": 25,
          "dexterity": 10,
          "constitution": 23,
          "intelligence": 16,
          "wisdom": 15,
          "charisma": 19
    },
        "saving_throws": {
          "strength": 7,
          "dexterity": 5,
          "constitution": 11,
          "intelligence": 3,
          "wisdom": 7,
          "charisma": 9
    },
        "skills": {
          "perception": 12,
          "stealth": 5
    },
        "damage_immunities": ["lightning"],
        "senses": {
          "blindsight": 60,
          "darkvision": 120,
          "truesight": 30,
          "passive_perception": 22
    },
        "languages": ["common", "draconic"],
        "special_abilities": [
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
            "description": "+12 to hit, reach 10 ft., one target, Hit: (2d10 + 7) piercing plus (1d10) lightning damage."
      },
          {
            "name": "Claw",
            "action_type": "Melee Weapon Attack",
            "description": "+12 to hit, reach 5 ft., one target, Hit: (2d6 + 7) slashing damage."
      },
          {
            "name": "Tail",
            "action_type": "Melee Weapon Attack",
            "description": "+12 to hit, reach 15 ft., one target, Hit: (2d8 + 7) bludgeoning damage."
      },
          {
            "name": "Frightful Presence",
            "action_type": null,
            "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 17 Wisdom Saving Throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
          {
            "name": "Lightning Breath (Recharge 5-6)",
            "action_type": "Breath Attack",
            "description": "The dragon exhales lightning in a 90-foot line that is 5 feet wide. Each creature in that line must make a DC 19 Dexterity Saving Throw, taking (12d10) lightning damage on a failed save, or half as much damage on a successful one."
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
            "description": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 20 Dexterity saving throw or take (2d6 + 7) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
        ],
        "spell_save_dc": 17,
        "spell_attack": 9,
        "spells": [
          {
            "spell_name": "Expeditious Retreat",
            "spell_level": 1,
            "casting_time": "1 bonus action",
            "range": "self",
            "components": "V, S",
            "duration": "Concentration, up to 10 minutes",
            "description": "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
      },
          {
            "spell_name": "Blur",
            "spell_level": 2,
            "casting_time": "1 action",
            "range": "self",
            "components": "V",
            "duration": "Concentration, up to 1 minutes",
            "description": "Your body becomes blured, shifting and waverig to all who can see you for the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
      },
          {
            "spell_name": "Major Image",
            "spell_level": 3,
            "casting_time": "1 action",
            "range": "120 feet",
            "components": "V, S",
            "duration": "Concentration, up to 10 minute",
            "description": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20=foot-cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench).\n\tAs long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter is appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.\n\tPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Investigation check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature."
      },
          {
            "spell_name": "Banishment",
            "spell_level": 4,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V, S",
            "duration": "Concentration, up to 1 minute",
            "description": "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma Saving Throw or be banished.\n\tIf the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space if left or in the nearest unoccupied space if that space is occupied.\n\tIf the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return."
      },
          {
            "spell_name": "Hold Monster",
            "spell_level": 5,
            "casting_time": "1 action",
            "range": "90 feet",
            "components": "V, S",
            "duration": "Concentration, up to 1 minutes",
            "description": "Choose a creature that you can see within range. The target must succeed on a Wisdom Saving Throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom Saving Throw. On a success, the spell ends on the target."
      },
        ]
      },
      "ancient": {
        "challenge_rating": 23,
        "health": 481,
        "size": "gargantuan",
        "alignment": "lawful evil",
        "armor_class": 22,
        "speed": {
          "ground": 40,
          "burrow": 40,
          "fly": 80
    },
        "ability_scores": {
          "strength": 29,
          "dexterity": 10,
          "constitution": 27,
          "intelligence": 18,
          "wisdom": 17,
          "charisma": 21
    },
        "saving_throws": {
          "strength": 9,
          "dexterity": 7,
          "constitution": 15,
          "intelligence": 4,
          "wisdom": 10,
          "charisma": 12
    },
        "skills": {
          "perception": 17,
          "stealth": 7
    },
        "damage_immunities": ["lightning"],
        "senses": {
          "blindsight": 60,
          "darkvision": 120,
          "truesight": 60,
          "passive_perception": 27
    },
        "languages": ["common", "draconic"],
        "special_abilities": [
          
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
            "description": "+16 to hit, reach 15 ft., one target, Hit: (2d10 + 9) piercing plus (2d10) lightning damage."
      },
          {
            "name": "Claw",
            "action_type": "Melee Weapon Attack",
            "description": "+16 to hit, reach 15 ft., one target, Hit: (2d6 + 9) slashing damage."
      },
          {
            "name": "Tail",
            "action_type": "Melee Weapon Attack",
            "description": "+16 to hit, reach 20 ft., one target, Hit: (2d8 + 9) bludgeoning damage."
      },
          {
            "name": "Frightful Presence",
            "action_type": null,
            "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 20 Wisdom Saving Throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
          {
            "name": "Lightning Breath (Recharge 5-6)",
            "action_type": "Breath Attack",
            "description": "The dragon exhales lightning in a 120-foot line that is 10 feet wide. Each creature in that line must make a DC 24 Dexterity Saving Throw, taking (16d10) lightning damage on a failed save, or half as much damage on a successful one."
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
            "description": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 24 Dexterity saving throw or take (2d6 + 9) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
        ],
        "spell_save_dc": 20,
        "spell_attack": 12,
        "spells": [
          {
            "spell_name": "Expeditious Retreat",
            "spell_level": 1,
            "casting_time": "1 bonus action",
            "range": "self",
            "components": "V, S",
            "duration": "Concentration, up to 10 minutes",
            "description": "This spell allows you to move at an incredible pace. When you cast this spell, and then as a bonus action on each of your turns until the spell ends, you can take the Dash action."
      },
          {
            "spell_name": "Blur",
            "spell_level": 2,
            "casting_time": "1 action",
            "range": "self",
            "components": "V",
            "duration": "Concentration, up to 1 minutes",
            "description": "Your body becomes blured, shifting and waverig to all who can see you for the duration, any creature has disadvantage on attack rolls against you. An attacker is immune to this effect if it doesn't rely on sight, as with blindsight, or can see through illusions, as with truesight."
      },
          {
            "spell_name": "Major Image",
            "spell_level": 3,
            "casting_time": "1 action",
            "range": "120 feet",
            "components": "V, S",
            "duration": "Concentration, up to 10 minute",
            "description": "You create the image of an object, a creature, or some other visible phenomenon that is no larger than a 20=foot-cube. The image appears at a spot that you can see within range and lasts for the duration. It seems completely real, including sounds, smells, and temperature appropriate to the thing depicted. You can't create sufficient heat or cold to cause damage, a sound loud enough to deal thunder damage or deafen a creature, or a smell that might sicken a creature (like a troglodyte's stench).\n\tAs long as you are within range of the illusion, you can use your action to cause the image to move to any other spot within range. As the image changes location, you can alter is appearance so that its movements appear natural for the image. For example, if you create an image of a creature and move it, you can alter the image so that it appears to be walking. Similarly, you can cause the illusion to make different sounds at different times, even making it carry on a conversation, for example.\n\tPhysical interaction with the image reveals it to be an illusion, because things can pass through it. A creature that uses its action to examine the image can determine that it is an illusion with a successful Investigation check against your spell save DC. If a creature discerns the illusion for what it is, the creature can see through the image, and its other sensory qualities become faint to the creature."
      },
          {
            "spell_name": "Banishment",
            "spell_level": 4,
            "casting_time": "1 action",
            "range": "60 feet",
            "components": "V, S",
            "duration": "Concentration, up to 1 minute",
            "description": "You attempt to send one creature that you can see within range to another plane of existence. The target must succeed on a Charisma Saving Throw or be banished.\n\tIf the target is native to the plane of existence you're on, you banish the target to a harmless demiplane. While there, the target is incapacitated. The target remains there until the spell ends, at which point the target reappears in the space if left or in the nearest unoccupied space if that space is occupied.\n\tIf the target is native to a different plane of existence than the one you're on, the target is banished with a faint popping noise, returning to its home plane. If the spell ends before 1 minute has passed, the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. Otherwise, the target doesn't return."
      },
          {
            "spell_name": "Hold Monster",
            "spell_level": 5,
            "casting_time": "1 action",
            "range": "90 feet",
            "components": "V, S",
            "duration": "Concentration, up to 1 minutes",
            "description": "Choose a creature that you can see within range. The target must succeed on a Wisdom Saving Throw or be paralyzed for the duration. This spell has no effect on undead. At the end of each of its turns, the target can make another Wisdom Saving Throw. On a success, the spell ends on the target."
      },
          {
            "spell_name": "Arcane Gate",
            "spell_level": 6,
            "casting_time": "1 action",
            "range": "500 feet",
            "components": "V, S",
            "duration": "Concentration, up to 10 minutes",
            "description": "You create linked teleportation portals that remain open for the duration. Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular poertal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.\n\tThe portals are two-dimensional glowing rings filled with mist, hovering inches from ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal.\n\tAny creature or object entering the portal exits from the other portalas if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
      },
          {
            "spell_name": "Reverse Gravity",
            "spell_level": 7,
            "casting_time": "1 action",
            "range": "100 feet",
            "components": "V, S",
            "duration": "Concentration, up to 1 minute",
            "description": "This spell reverses gravity ina 50-foot-radius, 100-foot high cylinder centered ona point within range. All creatures and objects that aren't somehow anchored to the ground in the area fall upward and reach the top of the area when you cast this spell. A creature can make a Dexterity Saving Throw to grab onto a fixed object it can reach, thus avoiding the fall.\n\tIf some solid object (such as a ceiling) is encountered in this fall, falling objects and creatures strike it just as they would during a normal downward fall. If an object or creature reaches the top of the area without striking anything, it remains there, oscillating slightly, for the duration.\n\tAt the end of the duration, affected objects and creatures fall back down."
      },
        ]
      }

    },
  "green": {
    "wyrmling": {
      "challenge_rating": 2,
      "size": "medium",
      "alignment": "lawful evil",
      "health": 38,
      "armor_class": 17,
      "speed": {
        "ground": 30,
        "swim": 30,
        "fly": 60
    },
      "ability_scores": {
        "strength": 15,
        "dexterity": 12,
        "constitution": 13,
        "intelligence": 14,
        "wisdom": 11,
        "charisma": 13
    },
      "saving_throws": {
        "strength": 2,
        "dexterity": 3,
        "constitution": 3,
        "intelligence": 2,
        "wisdom": 2,
        "charisma": 3
    },
      "skills": {
        "perception": 4,
        "stealth": 3
    },
      "damage_immunities": ["poison", "poisoned"],
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
          "description": "+4 to hit, reach 5 ft., one target, Hit: (1d10 + 2) piercing plus (1d6) poison damage."
      },
        {
          "name": "Poison Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales poison in a 15-foot cone. Each creature in that line must make a DC 11 Constitution Saving Throw, taking (6d6) poison damage on a failed save, or half as much damage on a successful one."
      }
      ],
      "spell_save_dc": 11,
      "spell_attack": 3,
      "spells": [
        {
          "spell_name": "Charm Person",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "30 feet",
          "components": "V, S",
          "duration": "1 hour",
          "description": "You attempt to charm a humanoid you can see within range. It must make a Wisdom Saving Throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
      }
      ]
    },
    "young": {
      "challenge_rating": 8,
      "health": 136,
      "size": "large",
      "alignment": "lawful evil",
      "armor_class": 18,
      "speed": {
        "ground": 40,
        "swim": 40,
        "fly": 80
    },
      "ability_scores": {
        "strength": 19,
        "dexterity": 12,
        "constitution": 17,
        "intelligence": 16,
        "wisdom": 13,
        "charisma": 15
    },
      "saving_throws": {
        "strength": 4,
        "dexterity": 4,
        "constitution": 6,
        "intelligence": 3,
        "wisdom": 4,
        "charisma": 5
    },
      "skills": {
        "perception": 7,
        "stealth": 4,
        "deception": 5
    },
      "damage_immunities": ["poison", "poisoned"],
      "senses": {
        "blindsight": 30,
        "darkvision": 120,
        "truesight": null,
        "passive_perception": 17
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
          "description": "+7 to hit, reach 10 ft., one target, Hit: (2d10 + 4) piercing plus (2d6) poison damage."
      },
        {
          "name": "Claw",
          "action_type": "Melee Weapon Attack",
          "description": "+7 to hit, reach 5 ft., one target, Hit: (2d6 + 4) slashing damage."
      },
        {
          "name": "Poison Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales poisonous gas in a 30-foot cone. Each creature in that line must make a DC 14 Constitution Saving Throw, taking (12d6) poison damage on a failed save, or half as much damage on a successful one."
      }
      ],
      "spell_save_dc": 13,
      "spell_attack": 5,
      "spells": [
        {
          "spell_name": "Charm Person",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "30 feet",
          "components": "V, S",
          "duration": "1 hour",
          "description": "You attempt to charm a humanoid you can see within range. It must make a Wisdom Saving Throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
      },
        {
          "spell_name": "Detect Thoughts",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "Self",
          "components": "V, S",
          "duration": "Concentration, up to 1 minutes",
          "description": "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.\n\tYou initially learn the surface thoughts of the creature--what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom Saving Throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creatue's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.\n\tQuestions verbally directed at thetarget creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.\n\tYou can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as an your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language.\n\tOnce you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range."
      },
        {
          "spell_name": "Hypnotic Pattern",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You create a twisting pattern of colors that weaves through the air inside a 30=foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom Saving Throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.\n\tThe spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor."
      },
      ]

    },
    "adult": {
      "challenge_rating": 15,
      "health": 207,
      "size": "huge",
      "alignment": "lawful evil",
      "armor_class": 19,
      "speed": {
        "ground": 40,
        "swim": 40,
        "fly": 80
    },
      "ability_scores": {
        "strength": 23,
        "dexterity": 12,
        "constitution": 21,
        "intelligence": 18,
        "wisdom": 15,
        "charisma": 17
    },
      "saving_throws": {
        "strength": 6,
        "dexterity": 6,
        "constitution": 10,
        "intelligence": 4,
        "wisdom": 7,
        "charisma": 8
    },
      "skills": {
        "perception": 12,
        "stealth": 6,
        "deception": 8,
        "insight": 7,
        "persuasion": 8
    },
      "damage_immunities": ["poison", "poisoned"],
      "senses": {
        "blindsight": 60,
        "darkvision": 120,
        "truesight": 30,
        "passive_perception": 22
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
          "description": "+11 to hit, reach 10 ft., one target, Hit: (2d10 + 6) piercing plus (2d6) poison damage."
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
          "name": "Poison Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales poison in a 60-foot cone. Each creature in that line must make a DC 18 Constitution Saving Throw, taking (16d6) poison damage on a failed save, or half as much damage on a successful one."
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
          "spell_name": "Charm Person",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "30 feet",
          "components": "V, S",
          "duration": "1 hour",
          "description": "You attempt to charm a humanoid you can see within range. It must make a Wisdom Saving Throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
      },
        {
          "spell_name": "Detect Thoughts",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "Self",
          "components": "V, S",
          "duration": "Concentration, up to 1 minutes",
          "description": "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.\n\tYou initially learn the surface thoughts of the creature--what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom Saving Throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creatue's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.\n\tQuestions verbally directed at thetarget creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.\n\tYou can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as an your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language.\n\tOnce you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range."
      },
        {
          "spell_name": "Hypnotic Pattern",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You create a twisting pattern of colors that weaves through the air inside a 30=foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom Saving Throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.\n\tThe spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor."
      },
        {
          "spell_name": "Greater Invisibility",
          "spell_level": 4,
          "casting_time": "1 action",
          "range": "Touch",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person."
      },
        {
          "spell_name": "Dominate Person",
          "spell_level": 5,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minutes",
          "description": "You attempt to beguile a humanoid taht you can see within range. It must succeed on a Wisdom Saving Throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.\n\tWhile the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \"Attack that creature,\" \"Run over there,\" or \"Fetch taht object.\" If the creature completes the order and doesn't recieve further direction from you, it defends and preserves itself to the best of its ability.\n\tYou can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.\n\tEach time the target takes damage, it makes a new Wisdom Saving Throw against the spell. If the saving throw succeeds, the spell ends."
      },
      ]
    },
    "ancient": {
      "challenge_rating": 22,
      "health": 385,
      "size": "gargantuan",
      "alignment": "lawful evil",
      "armor_class": 21,
      "speed": {
        "ground": 40,
        "swim": 40,
        "fly": 80
    },
      "ability_scores": {
        "strength": 27,
        "dexterity": 12,
        "constitution": 25,
        "intelligence": 20,
        "wisdom": 17,
        "charisma": 19
    },
      "saving_throws": {
        "strength": 8,
        "dexterity": 8,
        "constitution": 14,
        "intelligence": 5,
        "wisdom": 10,
        "charisma": 11
    },
      "skills": {
        "perception": 17,
        "stealth": 8,
        "deception": 11,
        "insight": 10,
        "persuasion": 11
    },
      "damage_immunities": ["poison", "poisoned"],
      "senses": {
        "blindsight": 60,
        "darkvision": 120,
        "truesight": 60,
        "passive_perception": 27
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
          "description": "+15 to hit, reach 15 ft., one target, Hit: (2d10 + 8) piercing plus (3d6) poison damage."
      },
        {
          "name": "Claw",
          "action_type": "Melee Weapon Attack",
          "description": "+15 to hit, reach 10 ft., one target, Hit: (4d6 + 8) slashing damage."
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
          "name": "Poison Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales poison in a 90-foot cone. Each creature in that cone must make a DC 22 Constitution Saving Throw, taking (22d6) poison damage on a failed save, or half as much damage on a successful one."
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
      "spell_save_dc": 19,
      "spell_attack": 11,
      "spells": [
        {
          "spell_name": "Charm Person",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "30 feet",
          "components": "V, S",
          "duration": "1 hour",
          "description": "You attempt to charm a humanoid you can see within range. It must make a Wisdom Saving Throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you."
      },
        {
          "spell_name": "Detect Thoughts",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "Self",
          "components": "V, S",
          "duration": "Concentration, up to 1 minutes",
          "description": "For the duration, you can read the thoughts of certain creatures. When you cast the spell and as your action on each turn until the spell ends, you can focus your mind on any one creature that you can see within 30 feet of you. If the creature you choose has an Intelligence of 3 or lower or doesn't speak any language, the creature is unaffected.\n\tYou initially learn the surface thoughts of the creature--what is most on its mind in that moment. As an action, you can either shift your attention to another creature's thoughts or attempt to probe deeper into the same creature's mind. If you probe deeper, the target must make a Wisdom Saving Throw. If it fails, you gain insight into its reasoning (if any), its emotional state, and something that looms large in its mind (such as something it worries over, loves, or hates). If it succeeds, the spell ends. Either way, the target knows that you are probing into its mind, and unless you shift your attention to another creatue's thoughts, the creature can use its action on its turn to make an Intelligence check contested by your Intelligence check; if it succeeds, the spell ends.\n\tQuestions verbally directed at thetarget creature naturally shape the course of its thoughts, so this spell is particularly effective as part of an interrogation.\n\tYou can also use this spell to detect the presence of thinking creatures you can't see. When you cast the spell or as an your action during the duration, you can search for thoughts within 30 feet of you. The spell can penetrate barriers, but 2 feet of rock, 2 inches of any metal other than lead, or a thin sheet of lead blocks you. You can't detect a creature with an Intelligence of 3 or lower or one that doesn't speak any language.\n\tOnce you detect the presence of a creature in this way, you can read its thoughts for the rest of the duration as described above, even if you can't see it, but it must still be within range."
      },
        {
          "spell_name": "Hypnotic Pattern",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You create a twisting pattern of colors that weaves through the air inside a 30=foot cube within range. The pattern appears for a moment and vanishes. Each creature in the area who sees the pattern must make a Wisdom Saving Throw. On a failed save, the creature becomes charmed for the duration. While charmed by this spell, the creature is incapacitated and has a speed of 0.\n\tThe spell ends for an affected creature if it takes any damage or if someone else uses an action to shake the creature out of its stupor."
      },
        {
          "spell_name": "Greater Invisibility",
          "spell_level": 4,
          "casting_time": "1 action",
          "range": "Touch",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You or a creature you touch becomes invisible until the spell ends. Anything the target is wearing or carrying is invisible as long as it is on the target's person."
      },
        {
          "spell_name": "Dominate Person",
          "spell_level": 5,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minutes",
          "description": "You attempt to beguile a humanoid taht you can see within range. It must succeed on a Wisdom Saving Throw or be charmed by you for the duration. If you or creatures that are friendly to you are fighting it, it has advantage on the saving throw.\n\tWhile the target is charmed, you have a telepathic link with it as long as the two of you are on the same plane of existence. You can use this telepathic link to issue commands to the creature while you are conscious (no action required), which it does its best to obey. You can specify a simple and general course of action, such as \"Attack that creature,\" \"Run over there,\" or \"Fetch taht object.\" If the creature completes the order and doesn't recieve further direction from you, it defends and preserves itself to the best of its ability.\n\tYou can use your action to take total and precise control of the target. Until the end of your next turn, the creature takes only the actions you choose, and doesn't do anything that you don't allow it to do. During this time you can also cause the creature to use a reaction, but this requires you to use your own reaction as well.\n\tEach time the target takes damage, it makes a new Wisdom Saving Throw against the spell. If the saving throw succeeds, the spell ends."
      },
        {
          "spell_name": "Mass Suggestion",
          "spell_level": 6,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V",
          "duration": "10 days",
          "description": "You suggest a course of activity (limited to a sentence or two) and magically influence up to twelve creatures of your choice that you can see within range and that can hear and understand you. Creatures that can't be charmed are immune to this effect. The suggestion must be worded in such a manner as to make the course of action sound reasonable. Asking the creature to stab itself, throw itself onto a spear, immolate itself, or do some other obviously harmful act automatically negates the effect of the spell.\n\tEach target must make a Wisdom Saving Throw. On a failed save, it pursues the course of action you described t othe best of its ability. The suggested course of action can continue for the entire duration. If the suggested activity can be completed in a shorter time, the spell ends when the subject finishes what is was akded to do.\n\tYou can also specify conditions that will trigger a special activity during the duration. For example, you might suggest that agroup of soldiers give all their money to the first beggar they meet. if The condition isn't met before the spell ends, the activity isn't performed.\n\tIf you ar any of your companions damage a creature affected by this spell, the spell ends for that creature."
      },
        {
          "spell_name": "Etherealness",
          "spell_level": 7,
          "casting_time": "1 action",
          "range": "Self",
          "components": "V, S",
          "duration": "Up to 8 hours",
          "description": "You step into the border regions of the Ethereal Plane, in the area where it overlaps with your current plane. You remain in the Border Ethereal for the duration or until you use your action to dismiss the spell. During this time, you can move in any direction. If you move up or down, every foot of movement costs an extra foot. You can see and hear the plane you originated from, but everything there looks gray, and you can't see anything more than 60 feet away.\n\tWhile on the Ethereal Plane, you can only affect and be affected by other creatures on that plane. Creatures that aren't on the Etheral Plane can't perceive you and can't interact with you, unless a special ability or magic has given them the ability to do so.\n\tYou ignore all objects and effects that aren't on the Ethereal Plane, allowing you to move through objects you perceive on the plane you originated from.\n\tWhen the spell ends, you immediately return to the plane your originated from in the spot you currently occupy. If you occupy the same spot asa solid object or creature when this happens, you are immediately shunted to the nearest unoccupied space that you can occupy and take force damage equal to twice the number of feet you are moved.\n\tThis spell has no effect if you cast it while you are on the Ethereal Plane or a plane that doesn't border it, such as one of the Outer Planes."
      },
      ]
    }

  },
  "red": {
    "wyrmling": {
      "challenge_rating": 4,
      "size": "medium",
      "alignment": "chaotic evil",
      "health": 75,
      "armor_class": 17,
      "speed": {
        "ground": 30,
        "climb": 30,
        "fly": 60
    },
      "ability_scores": {
        "strength": 19,
        "dexterity": 10,
        "constitution": 17,
        "intelligence": 12,
        "wisdom": 11,
        "charisma": 15
    },
      "saving_throws": {
        "strength": 4,
        "dexterity": 2,
        "constitution": 5,
        "intelligence": 1,
        "wisdom": 2,
        "charisma": 4
    },
      "skills": {
        "perception": 4,
        "stealth": 2
    },
      "damage_immunities": ["fire"],
      "senses": {
        "blindsight": 10,
        "darkvision": 60,
        "truesight": null,
        "passive_perception": 14
    },
      "languages": ["draconic"],
      "special_abilities": [
        {
          "name": null,
          "description": null
      }
      ],
      "actions": [
        {
          "name": "Bite",
          "action_type": "Melee Weapon Attack",
          "description": "+6 to hit, reach 5 ft., one target, Hit: (1d10 + 4) piercing plus (1d6) fire damage."
      },
        {
          "name": "Fire Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales fire in a 15-foot cone. Each creature in that cone must make a DC 13 Dexterity Saving Throw, taking (7d6) fire damage on a failed save, or half as much damage on a successful one."
      }
      ],
      "spell_save_dc": 12,
      "spell_attack": 4,
      "spells": [
        {
          "spell_name": "Chromatic Orb",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "instantaneous",
          "description": "You hurl a 4-inch diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose."
      }
      ]
    },
    "young": {
      "challenge_rating": 10,
      "health": 178,
      "size": "large",
      "alignment": "chaotic evil",
      "armor_class": 18,
      "speed": {
        "ground": 40,
        "climb": 40,
        "fly": 80
    },
      "ability_scores": {
        "strength": 23,
        "dexterity": 10,
        "constitution": 21,
        "intelligence": 14,
        "wisdom": 11,
        "charisma": 19
    },
      "saving_throws": {
        "strength": 6,
        "dexterity": 4,
        "constitution": 9,
        "intelligence": 2,
        "wisdom": 4,
        "charisma": 8
    },
      "skills": {
        "perception": 8,
        "stealth": 4
    },
      "damage_immunities": ["fire"],
      "senses": {
        "blindsight": 30,
        "darkvision": 120,
        "truesight": null,
        "passive_perception": 18
    },
      "languages": ["common", "draconic"],
      "special_abilities": [
        {
          "name": null,
          "description": null
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
          "description": "+10 to hit, reach 10 ft., one target, Hit: (2d10 + 6) piercing plus (1d6) fire damage."
      },
        {
          "name": "Claw",
          "action_type": "Melee Weapon Attack",
          "description": "+10 to hit, reach 5 ft., one target, Hit: (2d6 + 6) slashing damage."
      },
        {
          "name": "Fire Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales fire in a 30-cone. Each creature in that cone must make a DC 17 Dexterity Saving Throw, taking (16d6) fire damage on a failed save, or half as much damage on a successful one."
      }
      ],
      "spell_save_dc": 16,
      "spell_attack": 8,
      "spells": [
        {
          "spell_name": "Chromatic Orb",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "instantaneous",
          "description": "You hurl a 4-inch diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 5d8 damage of the type you chose."
      },
        {
          "spell_name": "Hold Person",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V",
          "duration": "Concentration, up to 1 minutes",
          "description": "Choose 2 humanoids that you can see within range. The target must succeed on a Wisdom Saving Throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom Saving Throw. On a success, the spell ends on the target."
      },
        {
          "spell_name": "Fireball",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "150 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into anexplosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity Saving Throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one.\n\tThe first spreads around corners. It ignites flammable objects in the area that aren't being worn or carried."
      },
      ]

    },
    "adult": {
      "challenge_rating": 17,
      "health": 256,
      "size": "huge",
      "alignment": "chaotic evil",
      "armor_class": 19,
      "speed": {
        "ground": 40,
        "climb": 40,
        "fly": 80
    },
      "ability_scores": {
        "strength": 27,
        "dexterity": 10,
        "constitution": 25,
        "intelligence": 16,
        "wisdom": 13,
        "charisma": 21
    },
      "saving_throws": {
        "strength": 8,
        "dexterity": 6,
        "constitution": 13,
        "intelligence": 3,
        "wisdom": 7,
        "charisma": 11
    },
      "skills": {
        "perception": 13,
        "stealth": 6
    },
      "damage_immunities": ["fire"],
      "senses": {
        "blindsight": 60,
        "darkvision": 120,
        "truesight": 30,
        "passive_perception": 23
    },
      "languages": ["common", "draconic"],
      "special_abilities": [
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
          "description": "+14 to hit, reach 10 ft., one target, Hit: (2d10 + 8) piercing plus (2d6) fire damage."
      },
        {
          "name": "Claw",
          "action_type": "Melee Weapon Attack",
          "description": "+14 to hit, reach 5 ft., one target, Hit: (2d6 + 8) slashing damage."
      },
        {
          "name": "Tail",
          "action_type": "Melee Weapon Attack",
          "description": "+14 to hit, reach 15 ft., one target, Hit: (2d8 + 8) bludgeoning damage."
      },
        {
          "name": "Frightful Presence",
          "action_type": null,
          "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 19 Wisdom Saving Throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
        {
          "name": "Fire Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales fire in a 60-foot cone. Each creature in that cone must make a DC 21 Dexterity Saving Throw, taking (18d6) fire damage on a failed save, or half as much damage on a successful one."
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
          "description": "The dragon beats its wings. Each creature within 10 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
      ],
      "spell_save_dc": 19,
      "spell_attack": 11,
      "spells": [
        {
          "spell_name": "Chromatic Orb",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "instantaneous",
          "description": "You hurl a 4-inch diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 7d8 damage of the type you chose."
      },
        {
          "spell_name": "Hold Person",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V",
          "duration": "Concentration, up to 1 minutes",
          "description": "Choose 4 humanoids that you can see within range. The target must succeed on a Wisdom Saving Throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom Saving Throw. On a success, the spell ends on the target."
      },
        {
          "spell_name": "Fireball",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "150 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into anexplosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity Saving Throw. A target takes 10d6 fire damage on a failed save, or half as much damage on a successful one.\n\tThe first spreads around corners. It ignites flammable objects in the area that aren't being worn or carried."
      },
        {
          "spell_name": "Wall of Fire",
          "spell_level": 4,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot htick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.\n\tWhen the wall appears, each creature within its area must makea Dexterity Saving Throw. On a failed save, a creature takes 6d8 fire damage, or half as much damage on a successful save.\n\tOne side of the wwall, selected by you when you cast this spell, deals 6d8 fire damage to each creature that ends its turn within 10 feet of the that side of or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage."
      },
        {
          "spell_name": "Conjure Minor Elementals",
          "spell_level": 5,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 hour",
          "description": "You summon elementals that appear in unoccupied spaces that you can see within range. you choose one of the following options for what appears:\n\n- One elemental of challenge rating 2 or lower\n- Two elementals of challenge rating 1 or lower\n- Four elementals of challenge rating 1/2 or lower\n- Eight elementals of challenge rating 1/4 or lower.\n\nAn elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.\n\tThe sommoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions."
      },
      ]
    },
    "ancient": {
      "challenge_rating": 24,
      "health": 546,
      "size": "gargantuan",
      "alignment": "chaotic evil",
      "armor_class": 22,
      "speed": {
        "ground": 40,
        "climb": 40,
        "fly": 80
    },
      "ability_scores": {
        "strength": 30,
        "dexterity": 10,
        "constitution": 29,
        "intelligence": 18,
        "wisdom": 15,
        "charisma": 23
    },
      "saving_throws": {
        "strength": 10,
        "dexterity": 7,
        "constitution": 16,
        "intelligence": 4,
        "wisdom": 9,
        "charisma": 13
    },
      "skills": {
        "perception": 16,
        "stealth": 7
    },
      "damage_immunities": ["fire"],
      "senses": {
        "blindsight": 60,
        "darkvision": 120,
        "truesight": 60,
        "passive_perception": 26
    },
      "languages": ["common", "draconic"],
      "special_abilities": [
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
          "description": "+17 to hit, reach 15 ft., one target, Hit: (2d10 + 10) piercing plus (4d6) fire damage."
      },
        {
          "name": "Claw",
          "action_type": "Melee Weapon Attack",
          "description": "+17 to hit, reach 10 ft., one target, Hit: (2d6 + 10) slashing damage."
      },
        {
          "name": "Tail",
          "action_type": "Melee Weapon Attack",
          "description": "+17 to hit, reach 20 ft., one target, Hit: (2d8 + 10) bludgeoning damage."
      },
        {
          "name": "Frightful Presence",
          "action_type": null,
          "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 21 Wisdom Saving Throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
        {
          "name": "Fire Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales fire in a 90-foot cone. Each creature in that cone must make a DC 24 Dexterity Saving Throw, taking (26d6) fire damage on a failed save, or half as much damage on a successful one."
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
          "description": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 25 Dexterity saving throw or take (2d6 + 10) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
      ],
      "spell_save_dc": 21,
      "spell_attack": 13,
      "spells": [
        {
          "spell_name": "Chromatic Orb",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "instantaneous",
          "description": "You hurl a 4-inch diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 9d8 damage of the type you chose."
      },
        {
          "spell_name": "Hold Person",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V",
          "duration": "Concentration, up to 1 minutes",
          "description": "Choose 6 humanoids that you can see within range. The target must succeed on a Wisdom Saving Throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom Saving Throw. On a success, the spell ends on the target."
      },
        {
          "spell_name": "Fireball",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "150 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into anexplosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity Saving Throw. A target takes 12d6 fire damage on a failed save, or half as much damage on a successful one.\n\tThe first spreads around corners. It ignites flammable objects in the area that aren't being worn or carried."
      },
        {
          "spell_name": "Wall of Fire",
          "spell_level": 4,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot htick, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot thick. The wall is opaque and lasts for the duration.\n\tWhen the wall appears, each creature within its area must makea Dexterity Saving Throw. On a failed save, a creature takes 8d8 fire damage, or half as much damage on a successful save.\n\tOne side of the wwall, selected by you when you cast this spell, deals 8d8 fire damage to each creature that ends its turn within 10 feet of the that side of or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage."
      },
        {
          "spell_name": "Conjure Minor Elementals",
          "spell_level": 5,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 hour",
          "description": "You summon elementals that appear in unoccupied spaces that you can see within range. you choose one of the following options for what appears:\n\n- Two elemental of challenge rating 2 or lower\n- Four elementals of challenge rating 1 or lower\n- Eight elementals of challenge rating 1/2 or lower\n- Sixteen elementals of challenge rating 1/4 or lower.\n\nAn elemental summoned by this spell disappears when it drops to 0 hit points or when the spell ends.\n\tThe sommoned creatures are friendly to you and your companions. Roll initiative for the summoned creatures as a group, which has its own turns. They obey any verbal commands that you issue to them (no action required by you). If you don't issue any commands to them, they defend themselves from hostile creatures, but otherwise take no actions."
      },
        {
          "spell_name": "Disintegrate",
          "spell_level": 6,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A thin green ray springs from your pointing finger to a target that you can see within range. The target can be a creature, an object, or a creation of magicalforce, such as the wall created by wall of force.\n\tA creature targeted by this spell must make a Dexterity Saving Throw. On a failed save, the target takes 13d6 + 40 force damage. The target is disintegrated if this damage leaves it with 0 hit points.\n\tA disintegrated creature and everything it is wearing and carrying, except magic items, are reduced to a pile of fine gray dust. The creature can be restored to life only be means ofa true ressurection or a wish spell.\n\tThis spell automatically disintegrates a Large or smaller nonmagical object or a creation of magical force. If the target is a Huge or larger object or creation of force, this spell disintegrates a 10-foot-cube portion of it. A magic item is unaffected by this spell."
      },
        {
          "spell_name": "Fire Storm",
          "spell_level": 7,
          "casting_time": "1 action",
          "range": "150 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A storm made up of sheets of roaring flame appears in a location you choose within range. The area of the storm consists of up to ten 10-foot cubes, which you can arrange as you wish. Each cube must have at least one face adjacent to the face ofa nother cube. Each creature in the area must make a Dexterity Saving Throw. It takes 7d10 fire damage on a failed save, or half as much damage on a successful one.\n\tThe fire damages objects in the area and ignites flammable objects that aren't being worn or carried. If you choose, plant life in the area is unaffected by this spell."
      },
      ]
    }

  },
  "white": {
    "wyrmling": {
      "challenge_rating": 2,
      "size": "medium",
      "alignment": "chaotic evil",
      "health": 32,
      "armor_class": 16,
      "speed": {
        "ground": 30,
        "swim": 30,
        "fly": 60,
        "burrow": 15
    },
      "ability_scores": {
        "strength": 14,
        "dexterity": 10,
        "constitution": 14,
        "intelligence": 5,
        "wisdom": 10,
        "charisma": 11
    },
      "saving_throws": {
        "strength": 2,
        "dexterity": 2,
        "constitution": 4,
        "intelligence": -3,
        "wisdom": 2,
        "charisma": 2
    },
      "skills": {
        "perception": 4,
        "stealth": 2
    },
      "damage_immunities": ["cold"],
      "senses": {
        "blindsight": 10,
        "darkvision": 60,
        "truesight": null,
        "passive_perception": 14
    },
      "languages": ["draconic"],
      "special_abilities": [
        {
          "name": null,
          "description": null
      }
      ],
      "actions": [
        {
          "name": "Bite",
          "action_type": "Melee Weapon Attack",
          "description": "+4 to hit, reach 5 ft., one target, Hit: (1d10 + 2) piercing plus (1d4) cold damage."
      },
        {
          "name": "Cold Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales cold in a 15-foot cone. Each creature in that cone must make a DC 12 Constitution Saving Throw, taking (5d8) cold damage on a failed save, or half as much damage on a successful one."
      }
      ],
      "spell_save_dc": 10,
      "spell_attack": 2,
      "spells": [
        {
          "spell_name": "Sleep",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "1 minute",
          "description": "This spell sends creatures into a magical slumber. Roll 5d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).\n\tStarting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.\n\tUndead and creatures immune to being charmed aren't affect by this spell."
      }
      ]
    },
    "young": {
      "challenge_rating": 6,
      "health": 133,
      "size": "large",
      "alignment": "chaotic evil",
      "armor_class": 17,
      "speed": {
        "ground": 40,
        "swim": 40,
        "fly": 80,
        "burrow": 20
    },
      "ability_scores": {
        "strength": 18,
        "dexterity": 10,
        "constitution": 17,
        "intelligence": 6,
        "wisdom": 11,
        "charisma": 12
    },
      "saving_throws": {
        "strength": 4,
        "dexterity": 3,
        "constitution": 7,
        "intelligence": -2,
        "wisdom": 3,
        "charisma": 4
    },
      "skills": {
        "perception": 6,
        "stealth": 3
    },
      "damage_immunities": ["cold"],
      "senses": {
        "blindsight": 30,
        "darkvision": 120,
        "truesight": null,
        "passive_perception": 16
    },
      "languages": ["common", "draconic"],
      "special_abilities": [
        {
          "name": null,
          "description": null
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
          "description": "+7 to hit, reach 10 ft., one target, Hit: (2d10 + 4) piercing plus (1d8) cold damage."
      },
        {
          "name": "Claw",
          "action_type": "Melee Weapon Attack",
          "description": "+7 to hit, reach 5 ft., one target, Hit: (2d6 + 4) slashing damage."
      },
        {
          "name": "Cold Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales cold in a 30-foot cone. Each creature in that cone must make a DC 15 Constitution Saving Throw, taking (10d8) cold damage on a failed save, or half as much damage on a successful one."
      }
      ],
      "spell_save_dc": 13,
      "spell_attack": 4,
      "spells": [
        {
          "spell_name": "Sleep",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "1 minute",
          "description": "This spell sends creatures into a magical slumber. Roll 9d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).\n\tStarting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.\n\tUndead and creatures immune to being charmed aren't affect by this spell."
      },
        {
          "spell_name": "Shatter",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution Saving Throw. A creature takes 4d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw."
      },
        {
          "spell_name": "Slow",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You alter time around up to six creatures of your choice ina 40-foot cube within range. Each target must succeed on a Wisdom Saving Throw or be affected by this spell for the duration.\n\tAn affected target's speed is halved, it takes a -2 penalty to AC and Dexterity Saving Throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regarless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.\n\tIf the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or highre, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.\n\tA creature affected by this spell makes another Wisdom Saving Throw at the end of each of its turns. On a successful save, the effect ends for it."
      },
      ]

    },
    "adult": {
      "challenge_rating": 13,
      "health": 200,
      "size": "huge",
      "alignment": "chaotic evil",
      "armor_class": 18,
      "speed": {
        "ground": 40,
        "swim": 40,
        "fly": 80,
        "burrow": 30
    },
      "ability_scores": {
        "strength": 22,
        "dexterity": 10,
        "constitution": 22,
        "intelligence": 8,
        "wisdom": 12,
        "charisma": 12
    },
      "saving_throws": {
        "strength": 6,
        "dexterity": 5,
        "constitution": 11,
        "intelligence": -1,
        "wisdom": 6,
        "charisma": 6
    },
      "skills": {
        "perception": 11,
        "stealth": 5
    },
      "damage_immunities": ["cold"],
      "senses": {
        "blindsight": 60,
        "darkvision": 120,
        "truesight": 30,
        "passive_perception": 21
    },
      "languages": ["common", "draconic"],
      "special_abilities": [
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
          "description": "+11 to hit, reach 10 ft., one target, Hit: (2d10 + 6) piercing plus (1d8) cold damage."
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
          "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 14 Wisdom Saving Throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
        {
          "name": "Cold Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales cold in a 60-foot cone. Each creature in that cone must make a DC 19 Constitution Saving Throw, taking (12d8) cold damage on a failed save, or half as much damage on a successful one."
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
      "spell_save_dc": 14,
      "spell_attack": 6,
      "spells": [
        {
          "spell_name": "Sleep",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "1 minute",
          "description": "This spell sends creatures into a magical slumber. Roll 13d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).\n\tStarting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.\n\tUndead and creatures immune to being charmed aren't affect by this spell."
      },
        {
          "spell_name": "Shatter",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution Saving Throw. A creature takes 6d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw."
      },
        {
          "spell_name": "Slow",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You alter time around up to six creatures of your choice ina 40-foot cube within range. Each target must succeed on a Wisdom Saving Throw or be affected by this spell for the duration.\n\tAn affected target's speed is halved, it takes a -2 penalty to AC and Dexterity Saving Throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regarless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.\n\tIf the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or highre, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.\n\tA creature affected by this spell makes another Wisdom Saving Throw at the end of each of its turns. On a successful save, the effect ends for it."
      },
        {
          "spell_name": "Ice Storm",
          "spell_level": 4,
          "casting_time": "1 action",
          "range": "300 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, a 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity Saving Throw. A creature takes 3d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage ona successful one.\n\tHailstones turn the storm's area of effect into difficult terrain until the end of your next turn."
      },
        {
          "spell_name": "Cone of Cold",
          "spell_level": 5,
          "casting_time": "1 action",
          "range": "Self (60-foot-cone)",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution Saving Throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.\n\tA creatuere killed by this spell becomes a frozen statue unti it thaws."
      },
      ]
    },
    "ancient": {
      "challenge_rating": 20,
      "health": 333,
      "size": "gargantuan",
      "alignment": "chaotic evil",
      "armor_class": 22,
      "speed": {
        "ground": 40,
        "swim": 40,
        "fly": 80,
        "burrow": 40
    },
      "ability_scores": {
        "strength": 26,
        "dexterity": 10,
        "constitution": 26,
        "intelligence": 10,
        "wisdom": 13,
        "charisma": 14
    },
      "saving_throws": {
        "strength": 8,
        "dexterity": 6,
        "constitution": 14,
        "intelligence": 0,
        "wisdom": 7,
        "charisma": 8
    },
      "skills": {
        "perception": 13,
        "stealth": 6
    },
      "damage_immunities": ["cold"],
      "senses": {
        "blindsight": 60,
        "darkvision": 120,
        "truesight": 60,
        "passive_perception": 23
    },
      "languages": ["common", "draconic"],
      "special_abilities": [
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
          "description": "+14 to hit, reach 15 ft., one target, Hit: (2d10 + 8) piercing plus (2d8) cold damage."
      },
        {
          "name": "Claw",
          "action_type": "Melee Weapon Attack",
          "description": "+14 to hit, reach 10 ft., one target, Hit: (2d6 + 8) slashing damage."
      },
        {
          "name": "Tail",
          "action_type": "Melee Weapon Attack",
          "description": "+14 to hit, reach 20 ft., one target, Hit: (2d8 + 8) bludgeoning damage."
      },
        {
          "name": "Frightful Presence",
          "action_type": null,
          "description": "Each creature of the dragon's choice that is within 120 feet of the dragon and aware of it must succeed on a DC 16 Wisdom Saving Throw or become frightened for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. If a creature's saving throw is successful or the effect ends for it, the creature is immune to the dragon's Frightful Presence for the next 24 hours."
      },
        {
          "name": "Cold Breath (Recharge 5-6)",
          "action_type": "Breath Attack",
          "description": "The dragon exhales cold in a 90-foot cone. Each creature in that cone must make a DC 22 Constitution Saving Throw, taking (16d8) cold damage on a failed save, or half as much damage on a successful one."
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
          "description": "The dragon beats its wings. Each creature within 15 feet of the dragon must succeed on a DC 22 Dexterity saving throw or take (2d6 + 8) bludgeoning damage and be knocked prone. The dragon can then fly up to half its flying speed."
      }
      ],
      "spell_save_dc": 16,
      "spell_attack": 8,
      "spells": [
        {
          "spell_name": "Sleep",
          "spell_level": 1,
          "casting_time": "1 action",
          "range": "90 feet",
          "components": "V, S",
          "duration": "1 minute",
          "description": "This spell sends creatures into a magical slumber. Roll 17d8; the total is how many hit points of creatures this spell can affect. Creatures within 20 feet of a point you choose within range are affected in ascending order of their current hit points (ignoring unconscious creatures).\n\tStarting with the creature that has the lowest current hit points, each creature affected by this spell falls unconscious until the spell ends, the sleeper takes damage, or someone uses an action to shake or slap the sleeper awake. Subtract each creature's hit points from the total before moving on to the creature with the next lowest hit points. A creature's hit points must be equal to or less than the remaining total for that creature to be affected.\n\tUndead and creatures immune to being charmed aren't affect by this spell."
      },
        {
          "spell_name": "Shatter",
          "spell_level": 2,
          "casting_time": "1 action",
          "range": "60 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution Saving Throw. A creature takes 8d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw."
      },
        {
          "spell_name": "Slow",
          "spell_level": 3,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 1 minute",
          "description": "You alter time around up to six creatures of your choice ina 40-foot cube within range. Each target must succeed on a Wisdom Saving Throw or be affected by this spell for the duration.\n\tAn affected target's speed is halved, it takes a -2 penalty to AC and Dexterity Saving Throws, and it can't use reactions. On its turn, it can use either an action or a bonus action, not both. Regarless of the creature's abilities or magic items, it can't make more than one melee or ranged attack during its turn.\n\tIf the creature attempts to cast a spell with a casting time of 1 action, roll a d20. On an 11 or highre, the spell doesn't take effect until the creature's next turn, and the creature must use its action on that turn to complete the spell. If it can't, the spell is wasted.\n\tA creature affected by this spell makes another Wisdom Saving Throw at the end of each of its turns. On a successful save, the effect ends for it."
      },
        {
          "spell_name": "Ice Storm",
          "spell_level": 4,
          "casting_time": "1 action",
          "range": "300 feet",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A hail of rock-hard ice pounds to the ground in a 20-foot-radius, a 40-foot-high cylinder centered on a point within range. Each creature in the cylinder must make a Dexterity Saving Throw. A creature takes 5d8 bludgeoning damage and 4d6 cold damage on a failed save, or half as much damage ona successful one.\n\tHailstones turn the storm's area of effect into difficult terrain until the end of your next turn."
      },
        {
          "spell_name": "Cone of Cold",
          "spell_level": 5,
          "casting_time": "1 action",
          "range": "Self (60-foot-cone)",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution Saving Throw. A creature takes 10d8 cold damage on a failed save, or half as much damage on a successful one.\n\tA creatuere killed by this spell becomes a frozen statue unti it thaws."
      },
        {
          "spell_name": "Wall of Ice",
          "spell_level": 6,
          "casting_time": "1 action",
          "range": "120 feet",
          "components": "V, S",
          "duration": "Concentration, up to 10 minutes",
          "description": "You create a wall of ice on a solid surface within range. You can form it into a hemispherical dome or a sphere with a radius of up to 10 feet, or you can shape a flat surface made up of ten 10-foot-square panels. Each panel must be contiguous with another panle. In any form, the wall is 1 foot thick and lasts for the duration.\n\tIf the wall cuts through a creature's space when it appears, the creature within its area is pushed to one side of hte wall and must make a Dexterity Saving Throw. On a failed save, the craeture takes 12d6 cold damage, or half as much damage on a successful save.\n\tThe wall is an object that can be damaged and thus breached. It has AC 12 and 30 hit points per 10-foot section, and it is vulnerable to fire damage. Reducing a 10-foot section of wall to 0 hit points destroys it and leaves behind a sheet of firgid air in the space the wall occupied. A creature moving through the sheet of frigid air for the first time on a turn must make a Constitution Saving Throw. That creature takes 6d6 cold damage on a failed save, or half as much on a successful one."
      },
        {
          "spell_name": "Prismatic Spray",
          "spell_level": 7,
          "casting_time": "1 action",
          "range": "Self (60-foot cone)",
          "components": "V, S",
          "duration": "Instantaneous",
          "description": "Eight multicolored rays of light flash from your hand. Each ray is a different color and has a different power and purpose. Each craeture in a 60-foot cone must make a Dexterity Saving Throw. For each target, roll a d8 to determine which color ray affects it.\n\t1. Red. The target takes 10d6 fire damage on a failed save, or half as much on a successful one.\n\t2. Orange. The target takes 10d6 acid damage on a failed save, or half as much on a successful one.\n\t3. Yellow. The target takes 10d6 lightning damage on a failed save, or half as much on a successful one.\n\t4. Green. The target takes 10d6 poison damage on a failed save, or half as much on a successful one.\n\t5. Blue. The target takes 10d6 cold damage on a failed save, or half as much on a successful one.\n\t6. Indigo. On a failed save, the target is restrained . It must then make a Constitution Saving Throw at the end of each of its turns. If it successfully saves three times, the spell ends. If it fails its save three times, it permanently turns to stone and is subjected to the petrification condition. The successes and failures don't need to be consecutive; keep track of both until the target collects three of a kind.\n\t7. Violet. On a failed save, the target is blinded. It must then make a Wisdom Saving Throw at the start of your next turn. A successful save ends the blindness. If it fails that save, the creature is transported to another plane of existence of the DM's choosing and is no longer blinded. (Typically, a creature that is on a plane that isn't its home plane is banished home, while other creatures are usually cast into the Astral or Ethereal Planes.)\n\t8. Special. The target is struck by two rays. Roll twice more, rerolling any 8."
      }
      ]
    }
  }
  },
"metallic":{
  "brass":{

  },
  "bronze":{

  },
  "copper":{

  },
  "gold":{

  },
  "silver":{

  }
},
"miscellaneous":{

}
}