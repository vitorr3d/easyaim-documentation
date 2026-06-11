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
  'Scenario Time': 'Choose the duration of your scenario, minimum of 30 seconds, maximum of 2 minutes.',
  'Difficulty Level': 'Specify the difficulty of your scenario, from 1 (Super Easy) to 5 (Super Hard).',
  'Scenario Type': 'Choose the category of your scenario.',
  'Automatic Assault Rifle': 'When enabled, the weapon switches to automatic mode with a fire rate of 1ms.',
  'Tube Room': 'Transforms the scenario environment into a tube (circular environment).',
  'Gravity XYZ': 'Change the gravity force on all axes.',
  'Wall Preferences': '<strong>Restitution:</strong> Higher values create faster bounces. <strong>Friction:</strong> Higher values add more friction when hitting a wall.',
  'Target Collisions': 'Turn on / off collisions on walls or targets.',
  'Player Spawn XYZ': 'Choose where the player will spawn in the environment.',
  'Enable Player Movement XYZ': 'Enables player movement on all axes.',
  'Default Player Rotation': 'Controls where the camera starts when initiating a challenge.',
  'Points per Miss': 'Controls the penalty when the player misses the target.',
  'Square Root Accuracy': 'Calculates your score based on your accuracy.',
  'Accuracy Score Weight': 'How much accuracy influences your score.',
};

/* ── Field descriptions (Targets Configuration) ── */
const targetDescriptions = {
  'New Target': '<span class="method-tag">new</span> New Target',
  'Target Name': 'Name your target.',
  'Initial Behaviour Timer': 'When the behaviour attached to the target will start, specified in milliseconds (ms).',
  'Teleport Indicator': 'When the bot teleports, this indicates where it went or spawned.',
  'Attach Behaviour': 'Attach the behaviour you created to your target. If no behaviour is attached, the target won\'t do anything.',
  'Target Shape': 'Choose the shape of the target.',
  'Size': 'XYZ size of the target.',
  'Health on Hit': 'How much damage per hit you will do.',
  'Points on Hit': 'How many points you will get per hit (multiply this by 1000 when using auto weapon).',
  'Points on Elimination': 'How many points you get by eliminating the target.',
  'Starting Health': 'Current / Maximum: Usually set both to the same value. This is the target\'s health.',
  'Cap Maximum Health': 'Prevents the target\'s health from exceeding the maximum value you set.',
  'Show Health Bar': 'Forces the health bar to always appear in this scenario.',
};

/* ── Action descriptions ── */
const actionData = {
  'Idle': { tag: 'frame', desc: 'The duration of that frame in milliseconds (ms).' },
  'Set Note': { tag: 'documentation', desc: 'A feature that allows you to document your frames.' },
  'Set Waypoint': {
    tag: 'movement',
    desc: 'Waypoints can be used for both spawning and movement, with many options available.',
    subfields: [
      ['Teleport', 'Allows the target to teleport to the specified location \u2014 essential for spawning the target.'],
      ['Spawn out of map', 'Allows the target to spawn outside the map, useful in specific scenarios.'],
      ['Prevent last death spawn', 'Forces the target to spawn at a different waypoint than the one where it died.'],
      ['Linear Movement', 'Makes all axis the same.'],
      ['Prevent target collision', 'Allows you to set a minimum distance from one target to another.'],
      ['Waypoint type', 'While <strong>Pin</strong> uses a fixed position on all axes, <strong>Orbit</strong> constrains the target relative to the player\'s position.'],
    ],
  },
  'Set Target Rubber Stiffness': {
    tag: 'physics',
    desc: 'Increases the strength of the rubber attached to the target in the game physics. The stronger the rubber, the faster the target changes direction and moves.',
  },
  'Set Target Damping': {
    tag: 'physics',
    desc: 'The opposite of Rubber Stiffness \u2014 controls slowdowns or complex direction changes beyond simple fast or slow movement.',
  },
  'Set Target Max Speed': {
    tag: 'movement',
    desc: 'Allows you to control the target\'s speed on all axes.',
  },
  'Set Target Health': {
    tag: 'combat',
    desc: 'Forces the target to spawn with the HP you choose, overwriting the HP set in the Target Configuration.',
  },
  'Set Target Time': {
    tag: 'timing',
    desc: 'Controls the target\'s timing \u2014 essential for scenarios where the target performs actions after a delay, such as dashes, blinks, jumps, or flight.',
  },
  'Set Target Restitution': {
    tag: 'physics',
    desc: 'Controls how the target recovers from bounces \u2014 higher values create stronger bounces.',
  },
  'Set Target Friction': {
    tag: 'physics',
    desc: 'The opposite of Restitution. Makes the bot stop faster when touching walls or other targets.',
  },
  'Set Target Mass': {
    tag: 'physics',
    desc: 'You can set the target mass for physical optimizations like accel calculation, etc.',
  },
  'Set Orbit Restriction': {
    tag: 'constraint',
    desc: 'Sets a distance at which the target orbits the player. Without this, moving targets can get too close or pass through the player.',
  },
  'On Waypoint Arrival': {
    tag: 'event',
    desc: 'When the target reaches a waypoint, it executes another action.',
  },
  'On Wall Hit': {
    tag: 'event',
    desc: 'When the target hits the specified walls, it executes another frame of your choice.',
  },
  'On Frame End': {
    tag: 'event',
    desc: 'When the idle time ends, the bot executes the action you chose.',
  },
  'On Target Time Reached': {
    tag: 'event',
    desc: 'When the target time reaches the specified value, it executes another action.',
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
