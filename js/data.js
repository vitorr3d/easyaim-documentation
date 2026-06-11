/* ============================================================
   EasyAim Documentation — Data
   ============================================================ */

const sections = [
  { id: 'welcome', label: 'Welcome', icon: '🏠' },
  {
    id: 'first-configurations',
    label: 'First Configurations',
    icon: '⚙️',
    items: [
      'Scenario Title',
      'Scenario Description',
      'Scenario Time',
      'Difficulty Level',
      'Scenario Type',
      'Automatic Assault Rifle',
      'Tube Room',
      'Gravity XYZ',
      'Wall Preferences',
      'Target Collisions',
      'Player Spawn XYZ',
      'Enable Player Movement XYZ',
      'Default Player Rotation',
      'Points per Miss',
      'Square Root Accuracy',
      'Accuracy Score Weight',
    ],
  },
  {
    id: 'targets-configuration',
    label: 'Targets Configuration',
    icon: '🎯',
    items: [
      'New Target',
      'Target Name',
      'Initial Behaviour Timer',
      'Teleport Indicator',
      'Attach Behaviour',
      'Target Shape',
      'Size',
      'Health on Hit',
      'Points on Hit',
      'Points on Elimination',
      'Starting Health',
      'Cap Maximum Health',
      'Show Health Bar',
    ],
  },
  {
    id: 'behaviours-configuration',
    label: 'Behaviours Configuration',
    icon: '🧠',
    items: ['Overview'],
  },
  {
    id: 'actions',
    label: 'Actions',
    icon: '⚡',
    items: [
      'Idle',
      'Set Note',
      'Set Waypoint',
      'Set Target Rubber Stiffness',
      'Set Target Damping',
      'Set Target Max Speed',
      'Set Target Health',
      'Set Target Time',
      'Set Target Restitution',
      'Set Target Friction',
      'Set Target Mass',
      'Set Orbit Restriction',
      'On Waypoint Arrival',
      'On Wall Hit',
      'On Frame End',
      'On Target Time Reached',
      'On Target Hit',
      'On Target Health Reached',
    ],
  },
];

/* ── Field descriptions (First Configurations) ── */
const fieldDescriptions = {
  'Scenario Title': 'Name your scenario.',
  'Scenario Description': 'Add whatever description you want to your scenario.',
  'Scenario Time': 'Choose the duration of your scenario, minimum 30 seconds, max 2 minutes.',
  'Difficulty Level': 'Specify the difficulty of your scenario, 1 Super Easy, 5 Super Hard.',
  'Scenario Type': 'Choose the category of your scenario.',
  'Automatic Assault Rifle': 'While on, the weapon turns to auto mode. The weapon fire rate is 1ms.',
  'Tube Room': 'Makes the scenario environment turn to a tube (circular environment).',
  'Gravity XYZ': 'Change the gravity force of all directions.',
  'Wall Preferences': '<strong>Restitution:</strong> Higher the number, faster the bounce. <strong>Friction:</strong> Higher the number, more friction is added when hitting the wall.',
  'Target Collisions': 'Turn on / off collisions on walls or targets.',
  'Player Spawn XYZ': 'Choose where the player will spawn in the environment.',
  'Enable Player Movement XYZ': 'Enables the player movement on all axis.',
  'Default Player Rotation': 'Controls where the camera will start at when initiating a challenge.',
  'Points per Miss': 'Controls the penalty when the player misses the target.',
  'Square Root Accuracy': 'Calculates your score based on your accuracy.',
  'Accuracy Score Weight': 'How much the accuracy influences in your scoring.',
};

/* ── Field descriptions (Targets Configuration) ── */
const targetDescriptions = {
  'New Target': '<span class="method-tag">new</span> New Target',
  'Target Name': 'Name your Target.',
  'Initial Behaviour Timer': 'When the behaviour attached to the target will start, calculated in milliseconds (ms).',
  'Teleport Indicator': 'When the bot teleports it indicates where it went / spawned.',
  'Attach Behaviour': 'Attach the behaviour that you created for your target on it. If you don\'t attach any behaviour, the target just won\'t do anything.',
  'Target Shape': 'Choose the shape of the target.',
  'Size': 'XYZ size of the target.',
  'Health on Hit': 'How much damage per hit you will do.',
  'Points on Hit': 'How many points you will get per hit (multiply this by 1000 when using auto weapon).',
  'Points on Elimination': 'How many points you get by eliminating the target.',
  'Starting Health': 'Current - Maximum: Usually keep both the same, it\'s the health of the target.',
  'Cap Maximum Health': 'Blocks the target health from going higher than the maximum health that you chose.',
  'Show Health Bar': 'Forces health bar to always appear in this scenario.',
};

/* ── Action descriptions ── */
const actionData = {
  'Idle': { tag: 'frame', desc: 'The duration in "MS" of that Frame.' },
  'Set Note': { tag: 'documentation', desc: 'This is a feature that allows you to document your Frames.' },
  'Set Waypoint': {
    tag: 'movement',
    desc: 'Waypoints can be used both for spawn and movement, inside of it you have a lot of options.',
    subfields: [
      ['Teleport', 'Allows the target to teleport to the location that you\'ve specified, essential for spawning the target.'],
      ['Spawn out of map', 'Allows the target to be spawned out of the map, useful in some specific scenarios.'],
      ['Prevent last death spawn', 'Forces the target to spawn in another waypoint that wasn\'t the one of his death.'],
      ['Linear Movement', 'Makes all axis the same.'],
      ['Prevent target collision', 'Allows you to set a minimum distance from one target to another.'],
      ['Waypoint type', 'While <strong>Pin</strong> is the flat value waypoint for all axis, <strong>Orbit</strong> makes the target respect a limit where the reference for its limits is the player position.'],
    ],
  },
  'Set Target Rubber Stiffness': {
    tag: 'physics',
    desc: 'This Action allows you to make a Rubber attached to the target (in the game physics) stronger. Stronger the rubber faster will be the direction changes and movement of the target.',
  },
  'Set Target Damping': {
    tag: 'physics',
    desc: 'This is also simple, this makes the opposite of Rubber Stiffness, can be used to control slow downs or direction changes that are more complex than just moving fast or slow.',
  },
  'Set Target Max Speed': {
    tag: 'movement',
    desc: 'Allows you to control the speed of the target on all axis.',
  },
  'Set Target Health': {
    tag: 'combat',
    desc: 'Forces the target to spawn with the HP that you choose, it overwrites the HP you setup in the Target Configuration.',
  },
  'Set Target Time': {
    tag: 'timing',
    desc: 'This allows you to control the time of the target, essential for making scenarios where the target does something after some time, for example skills like dashes, blink, jumping, flying, etc.',
  },
  'Set Target Restitution': {
    tag: 'physics',
    desc: 'Allows you to control how the target will recover from bounces, higher the number stronger the bounce.',
  },
  'Set Target Friction': {
    tag: 'physics',
    desc: 'The opposite of Restitution, makes the bot stop faster when touching walls or other targets.',
  },
  'Set Target Mass': {
    tag: 'physics',
    desc: 'You can set the target mass for physical optimizations like accel calculation, etc.',
  },
  'Set Orbit Restriction': {
    tag: 'constraint',
    desc: 'Allows you to set a distance that the target will orbit around the player. If you don\'t add this to moving targets they can get very close or pass through the player.',
  },
  'On Waypoint Arrival': {
    tag: 'event',
    desc: 'When the target gets to a waypoint it executes another action.',
  },
  'On Wall Hit': {
    tag: 'event',
    desc: 'When the target hits the specified walls they execute another frame of your choice.',
  },
  'On Frame End': {
    tag: 'event',
    desc: 'When the idle time ends the bot will execute the action that you chose on frame end.',
  },
  'On Target Time Reached': {
    tag: 'event',
    desc: 'When the target time gets to the number you specified it will execute another action.',
  },
  'On Target Hit': {
    tag: 'event',
    desc: 'When the target is hit, it executes another action of your choice.',
  },
  'On Target Health Reached': {
    tag: 'event',
    desc: 'When the target health gets to the number you specified, you can attach another action to be executed.',
  },
};
