import { SkillParent } from "../models/skills.model";

export const skillsConst: SkillParent[] = [
    {
        id: 1,
        label: 'Comprehensive Skills',
        backgroundColor: 'rgb(35, 58, 42)',
        skills: [
            {
                id: 1,
                imgPath: 'assets/images/tenderfoot-badge.jpg',
                label: 'Tenderfoot',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'Scout Law, Promise and Motto',
                        descrip:
                            'Know the Scout Law, Promise, and Motto, and understand their meanings.',
                        selected: false,
                    },
                    {
                        label: 'Scout Salute and Handshake',
                        descrip: 'Know the Scout salute, handshake, and their importance.',
                        selected: false,
                    },
                    {
                        label: 'Woodcraft Trail Signs',
                        descrip:
                            'Be able to make and know the meaning of the woodcraft trail signs.',
                        selected: false,
                    },
                    {
                        label: 'Scout Law, Promise and Motto',
                        descrip:
                            'Know the Scout Law, Promise, and Motto, and understand their meanings.',
                        selected: false,
                    },
                    {
                        label: 'American Flag',
                        descrip:
                            'Know the composition and history of, and how to fly and fold, the American flag.',
                        selected: false,
                    },
                    {
                        label: 'Scout Staff',
                        descrip: 'Know certain uses of the Scout staff.',
                        selected: false,
                    },
                    {
                        label: 'Knots to Know',
                        descrip:
                            'Tie the following knots: reef knot, sheet bend, clove hitch, bowline, round turn & two half-hitches, sheepshank; and understand their respective uses.',
                        selected: false,
                    },
                    {
                        label: 'Rope Whip',
                        descrip: 'Know how to whip the end of a rope.',
                        selected: false,
                    },
                ],
            },
            {
                id: 2,
                imgPath: 'assets/images/secondclass-badge.jpg',
                label: 'Second Class',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'First Aid',
                        descrip:
                            'First Aid: Know the following: general rules of health, cuts, sprains, burns, nose bleeds, stings, cleaning & apply dressing to wound, triangular bandage for knee, head, foot as well as summoning help and treatment for shock.',
                        selected: false,
                    },
                    {
                        label: 'Signaling/Morse/ASL',
                        descrip:
                            'Using one of Signaling/Morse/ASL, know each letter/number, send & read simple messages and the calling-up sign/answer, general answer, and end of message sign/answer.',
                        selected: false,
                    },
                    {
                        label: 'Observation and Efficiency',
                        descrip:
                            'Either follow a trail, half mile in 25 minutes; or describe Kim’s game remember 16 of 24 assorted, small items in 1 minute observation and an efficient performance of Scout’s Pace.',
                        selected: false,
                    },
                    {
                        label: 'Knots and Lashes',
                        descrip:
                            'Demonstrate square/diagonal lashings, timber hitch, rolling hitch and fisherman’s knot.',
                        selected: false,
                    },
                    {
                        label: ' Lighting a Fire',
                        descrip:
                            'Lay and light a wood fire in the open, using no more than 2 matches and natural tinder.',
                        selected: false,
                    },
                    {
                        label: 'Cooking',
                        descrip:
                            'Cook a 1/4 pound of meat and two potatoes, without utensils other than billy-can over wood fire in open.',
                        selected: false,
                    },
                    {
                        label: 'Safety with Blades',
                        descrip:
                            'Know safety rules and care of hand-axe, knife, and saw. Demonstrate correct way to chop firewood and complete the requirements for the Woods Tools Award (see BPSA-US website for more details).',
                        selected: false,
                    },
                    {
                        label: 'Using a Compass',
                        descrip:
                            'Demonstrate practical use of a compass and know 16 principle points.',
                        selected: false,
                    },
                    {
                        label: 'Tenderfoot Standing',
                        descrip:
                            'Have at least 1 month’s satisfactory service as Tenderfoot, and satisfy to the Scoutmaster that s/he can repass the Tenderfoot tests.',
                        selected: false,
                    },
                ],
            },
            {
                id: 3,
                imgPath: 'assets/images/firstclass-badge.png',
                label: 'First Class',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'Swimming Or',
                        descrip:
                            'Complete EITHER of the following: Swim 50 yards OR If swimming is inappropriate or dangerous to your health, instead pass ONE of the following special proficiency badges: A) Astronomer, B) Camper, C) Healthy Living, D) Housewright, E) Naturalist, F) Observer, G) Pioneer, H) Ranger.',
                        selected: false,
                    },
                    {
                        label: 'Life Line',
                        descrip:
                            'Throw a lifeline and explain how it fits into the principles and risks of water recreation and water rescue—specifically in the following procedures: A) Reach,  B) Throw, C) Row, D) Go',
                        selected: false,
                    },
                    {
                        label: 'Knots and Lashings',
                        descrip:
                            "Demonstrate correctly the following knots and lashings: A) Shear lashing, B) Round lashing, C) Back splice, D) Eye splice, E) Firefighter's chair, F) Alpine butterfly",
                        selected: false,
                    },
                    {
                        label: 'Estimation',
                        descrip:
                            'Estimate, without apparatus, within 25 percent error each side: A) Distance (eg. How long is that trail?), B) Numbers (eg. How many cows in that herd?), C) Height (eg. How tall is that tree?)',
                        selected: false,
                    },
                    {
                        label: 'First Aid',
                        descrip: 'Earn the First Aid special proficiency badge.',
                        selected: false,
                    },
                    {
                        label: 'Cooking',
                        descrip:
                            "Demonstrate your cooking skills. A) Present to your Examiner the comprehensive meal plan you intend to prepare for your First Class Journey. B) Satisfactorily estimate the budget, create a shopping list of ingredients, and perform all the shopping for your meals. C) Explain the necessary utensils, cooking tools, stove, and fuel requirements you'll need. D) Demonstrate that you are prepared to pack and carry as necessary all of your equipment and ingredients during a rehearsal or test session.",
                        selected: false,
                    },
                    {
                        label: 'Mapping',
                        descrip:
                            'Demonstrate your mapping abilities. A) Read and be able to use a topographical map. B) Draw an intelligible rough sketch map. C) Demonstrate proper use of a compass. D) Point out a compass direction by day and by night without the help of a compass.',
                        selected: false,
                    },
                    {
                        label: 'Felling Axe',
                        descrip:
                            'Use a felling axe for felling or trimming light timber, or, if impractical, be able to log up a piece of timber and demonstrate the theory of felling a tree. (The term “felling axe” includes both three-quarter and half-size.)',
                        selected: false,
                    },
                    {
                        label: 'First Class Journey',
                        descrip:
                            'Complete a First Class Journey. For details on these requirements, see the chapter on First Class tests.',
                        selected: false,
                    },
                ],
            },
            {
                id: 4,
                imgPath: 'assets/images/torchbearer-badge.jpg',
                label: 'Torchbearer',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'Civics and Community',
                        descrip:
                            'Earn at least SIX special proficiency badges from the area of Civics and Community. These must include Advocate and Community Service.',
                        selected: false,
                    },
                    {
                        label: 'Senior Civics and Community',
                        descrip:
                            'Earn at least FOUR senior special proficiency badges from Civics and Community. These must include Senior Advocate and Emergency Planner.',
                        selected: false,
                    },
                    {
                        label: 'Leadership Training',
                        descrip:
                            'Participate in a Bronze Arrow Training (BAT) or similar leadership training seminar.',
                        selected: false,
                    },
                    {
                        label: 'Patrol Leader',
                        descrip:
                            'Serve as patrol leader for a minimum of 6 months to the satisfaction of your Examiner.',
                        selected: false,
                    },
                    {
                        label: 'Research and Action',
                        descrip:
                            'Research a social or political issue that is important to you. Write to one of your elected representatives—this may be local, statewide, or national—explaining your position and asking for them to take some action.',
                        selected: false,
                    },
                    {
                        label: 'Presentation',
                        descrip:
                            'Create a presentation for your troop or group about what your scouting experience has taught you about leadership and helping your community. The presentation should be a minimum length agreed beforehand with your Examiner and must include visual aids.',
                        selected: false,
                    },
                ],
            },
            {
                id: 5,
                imgPath: 'assets/images/trailblazer-badges.jpg',
                label: 'Trailblazer',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'Creative Arts',
                        descrip:
                            'Earn at least SIX special proficiency badges from the area of Creative Arts, which must include at least one performing arts badge and one crafting arts badge. Senior level badges may also be substituted in place of special proficiency badges.',
                        selected: false,
                    },
                    {
                        label: 'Senior Creative Arts',
                        descrip:
                            'Earn at least FOUR senior proficiency badges in Creative Arts, one of which must be Indigineous Art Appreciation.',
                        selected: false,
                    },
                    {
                        label: 'Instruct Another',
                        descrip:
                            'Instruct a fellow scout in one of the disciplines covered in a Creative Arts special proficiency badge to the extent that they pass the tests and earn the badge themselves.',
                        selected: false,
                    },
                    {
                        label: 'Creative History Project',
                        descrip:
                            'Create a special project chronicling your troop’s history over a period of time of at least 6 months. This may be a documentary film, photo series, play, skit, dance, story, or any other creative medium. The length or scale of your project must be determined in consultation with your Examiner, but it must be extensive enough to do justice to your subject and tell your troop’s story. Perform or present your project to your troop.',
                        selected: false,
                    },
                ],
            },
            {
                id: 6,
                imgPath: 'assets/images/voyager-badge.jpg',
                label: 'Voyager',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'Life Skills',
                        descrip:
                            'Earn at least SIX special proficiency badges from the area of Life Skills, at least one of which must be an outdoor-focused badge such as Naturalist or Forester and at least one of which must be an indoor-focused badge such as Housewright or Homemaker. Senior level badges may also be substituted in place of special proficiency badges.',
                        selected: false,
                    },
                    {
                        label: 'Senior Life Skills',
                        descrip:
                            'Earn at least THREE senior special proficiency badges from the area of Life Skills.',
                        selected: false,
                    },
                    {
                        label: 'Instruct Another',
                        descrip: 'Instruct a fellow scout in one of the disciplines covered in a Life Skills special proficiency badge to the extent that they pass the tests and earn the badge themselves.',
                        selected: false,
                    },
                    {
                        label: 'Presentation',
                        descrip: 'Give a presentation to your troop (or group) about something you learned while working on these badges and how you think it can be applied to life beyond just earning a badge. Have you found a hobby, career path or set of skills you plan to use long after your time as a Pathfinder is over? Explain. The presentation should be a minimum length agreed beforehand with your Examiner and must include visual aids.',
                        selected: false,
                    },
                ],
            },
            {
                id: 7,
                imgPath: 'assets/images/polaris.png',
                label: 'Polaris Award',
                progressPercentage: 0,
                parts: [
                    {
                        label: '3 Pillars',
                        descrip: 'Complete 3 of the 4 pillars.',
                        selected: false,
                    },
                    {
                        label: 'Letter of Achievements',
                        descrip: 'Next, you should submit a letter to national headquarters with a list of your achievements. List details of which badges, awards, and programs you completed to explain how you achieved each of the three pillars. You should write this in a way that you can see for yourself all the work you accomplished to obtain this award. Following in the best traditions of the patrol method, you will hand this letter to your scoutmaster, who will convey it to the regional commissioner, who will in turn deliver it to the national headquarters. This will allow all levels of our organization to celebrate your accomplishment.',
                        selected: false,
                    },
                ],
            },
            {
                id: 8,
                imgPath: 'assets/images/goldcompass-award.png',
                label: 'Gold Compass Rose',
                progressPercentage: 0,
                parts: [
                    {
                        label: '4 Pillars',
                        descrip: 'If you achieve all 4 pillars, you will receive a special gold compass rose disc for your Polaris pin. The compass rose signifies a scout who truly has a compass, a knowledge of all four cardinal aspects of life. With the help of the North Star, your remarkable skills and achievements will navigate you through the challenges and exigencies of life.',
                        selected: false,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        label: 'Outdoor Skills',
        backgroundColor: '#4eac31',
        skills: [
            {
                id: 1,
                imgPath: 'assets/images/angler-badge.jpg',
                label: 'Angler',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: 'Explain and demonstrate how to store and transport your fishing tools and accessories safely and securely.',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: 'Explain the food safety considerations you need to make when fishing. For example, how do you store bait safely, and how do you store your catch safely so you can eat it later? Explain how to clean a fish.',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: 'Know and be able to explain the rules and regulations in your local area that govern fishing seasons, catch limits, and locations you are permitted to fish. Know how to obtain a fishing license in your area, if required.',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: 'Be able to recognize the FIVE most common game fish in the lakes or rivers in your area. Describe the characteristics of each, including the following: A) Appearance, B) Spawning Season, C) Catch size, D) Depth, E) Bait.',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: 'Be able to describe characteristics of ideal fishing spots for each of the five most common game fish in your area. What features of the terrain or water indicate good possible habitats for the fish?',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: 'Be able to recognize the FOUR different types of reels, and explain the uses and considerations for each one. A) Spincast, B) Spinning, C) Baitcasting, D) Fly.',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: 'Demonstrate how to set up a fishing rod, line, and rig for the five most common types of fish in your area. (Note that no specific rod or reel is required here. Use what you have available.)',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: 'Demonstrate how to cast and reel in your catch with your rod. Explain common strategies for how to fight with your catch if it is trying to run or jump.',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: 'Demonstrate how to land a fish. Explain the consideration and techniques or demonstrate that you can land different sized fish at different elevations (level with the water, from a dock, from a boat, and from a raised shoreline). Explain when and how to use a landing net.',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: 'Demonstrate simple repairs to a rod (e.g., whipping a broken rod, whipping on guide rings, replacing the tip top).',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: 'Explain what to look for when inspecting your fishing line and explain what would indicate that it needs to be replaced. Demonstrate how to re-spool the fishing line on your reel.',
                        selected: false,
                    },
                    {
                        label: 'Replacing Reel',
                        descrip: 'Demonstrate how to remove and replace the reel on your rod.',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: 'Choose ONE of the five most common game fish in your area and make a plan to catch some examples. For your Examiner, specify what fish you intend to catch, where you plan to go fishing, and what kind of bait you will use.',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: 'Over the course of THREE or more outings, catch at least SIX of your target fish. You may not count more than two fish from any single outing as part of your goal.',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: 'For each catch, take a picture, and document what bait and rod you used, your location, and your method for landing the fish.',
                        selected: false,
                    },
                ],
            },
            {
                id: 2,
                imgPath: 'assets/images/astronomer-badge.jpg',
                label: 'Astronomer',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'yeah yeah yeah',
                        descrip: 'More more more',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 3,
                imgPath: 'assets/images/backpacker-badge.png',
                label: 'Backpacker',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 4,
                imgPath: 'assets/images/bicycle-camp-badge.jpg',
                label: 'Bicycle Camper',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 5,
                imgPath: 'assets/images/birder-badge.png',
                label: 'Birder',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 6,
                imgPath: 'assets/images/engineer-badge.png',
                label: 'Camp Engineer',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 7,
                imgPath: 'assets/images/camp-badge.png',
                label: 'Camper',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 8,
                imgPath: 'assets/images/canoeist-badge.png',
                label: 'Canoeist',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 9,
                imgPath: 'assets/images/cooking-badge.jpg',
                label: 'Cook',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 10,
                imgPath: 'assets/images/cyclist-badge.png',
                label: 'Cyclist',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 11,
                imgPath: 'assets/images/flower-badge.png',
                label: 'Flower Finder',
                progressPercentage: 0,
                parts: [
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: '',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 12,
                imgPath: 'assets/images/hiker-badge.png',
                label: 'Hiker',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 13,
                imgPath: 'assets/images/kayaker-badge.png',
                label: 'Kayaker',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 14,
                imgPath: 'assets/images/mariner-badge.png',
                label: 'Mariner',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 15,
                imgPath: 'assets/images/naturalist-badge.png',
                label: 'Naturalist',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 16,
                imgPath: 'assets/images/nautical-camp-badge.png',
                label: 'Nautical Camper',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 17,
                imgPath: 'assets/images/observer-badge.png',
                label: 'Observer',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 18,
                imgPath: 'assets/images/orienteer-badge.png',
                label: 'Orienteer',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 1,
                imgPath: 'assets/images/ranger-badge.png',
                label: 'Ranger',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 1,
                imgPath: 'assets/images/rockclimber-badge.png',
                label: 'Rock Climber',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        label: 'Civics and Community Skills',
        backgroundColor: '#c73930',
        skills: [
            {
                id: 1,
                imgPath: 'assets/images/advocate-badge.png',
                label: 'Advocate',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 2,
                imgPath: 'assets/images/child-care-badge.png',
                label: 'Childcare',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 3,
                imgPath: 'assets/images/civics_and_government-badge.png',
                label: 'Civics and Government',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 4,
                imgPath: 'assets/images/community_service-badge.png',
                label: 'Community Service',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 5,
                imgPath: 'assets/images/conservationist-badge.png',
                label: 'Conservationist',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 6,
                imgPath: 'assets/images/debater-badge.png',
                label: 'Debater',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 7,
                imgPath: 'assets/images/firefighter-badge.png',
                label: 'Firefighter',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 8,
                imgPath: 'assets/images/first_aid-badge.png',
                label: 'First Aid',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 9,
                imgPath: 'assets/images/guide-badge.png',
                label: 'Guide',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 10,
                imgPath: 'assets/images/healthy_living-badge.png',
                label: 'Healthy Living',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 11,
                imgPath: 'assets/images/historian-badge.png',
                label: 'Historian',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 12,
                imgPath: 'assets/images/interpreter-badge.png',
                label: 'Interpreter',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 13,
                imgPath: 'assets/images/world_friendship-badge.png',
                label: 'World Friendship',
                progressPercentage: 0,
                parts: [],
            },
        ],
    },
    {
        id: 4,
        label: 'Creative Skills',
        backgroundColor: 'goldenrod',
        skills: [
            {
                id: 1,
                imgPath: 'assets/images/architect-badge.png',
                label: 'Architect',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 2,
                imgPath: 'assets/images/basket-badge.png',
                label: 'Basket Worker',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 3,
                imgPath: 'assets/images/dancer-badge.png',
                label: 'Dancer',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 4,
                imgPath: 'assets/images/drummer-badge.png',
                label: 'Drummer',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 5,
                imgPath: 'assets/images/entertainer-badge.png',
                label: 'Entertainer',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 6,
                imgPath: 'assets/images/filmmaker-badge.png',
                label: 'Filmmaker',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 7,
                imgPath: 'assets/images/musician-badge.png',
                label: 'Musician',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 8,
                imgPath: 'assets/images/paracordist-badge.png',
                label: 'Paracordist',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 9,
                imgPath: 'assets/images/photographer-badge.png',
                label: 'Photographer',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 10,
                imgPath: 'assets/images/sculptor-badge.png',
                label: 'Sculptor',
                progressPercentage: 0,
                parts: [],
            },
            {
                id: 11,
                imgPath: 'assets/images/visualart-badge.png',
                label: 'Visual Artist',
                progressPercentage: 0,
                parts: [],
            },
        ],
    },
    {
        id: 5,
        label: 'Life Skills',
        backgroundColor: '#416aed',
        skills: [
            {
                id: 1,
                imgPath: 'assets/images/archer-badge.png',
                label: 'Archer',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 2,
                imgPath: 'assets/images/athlete-badge.png',
                label: 'Athlete',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 3,
                imgPath: 'assets/images/beekeeper-badge.png',
                label: 'Beekeeper',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 4,
                imgPath: 'assets/images/canner-badge.png',
                label: 'Canner',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 5,
                imgPath: 'assets/images/chicken_farmer-badge.png',
                label: 'Chicken Farmer',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 6,
                imgPath: 'assets/images/collector-badge.png',
                label: 'Collector',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 7,
                imgPath: 'assets/images/equestrian-badge.png',
                label: 'Equestrian',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 8,
                imgPath: 'assets/images/forester-badge.png',
                label: 'Forester',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 9,
                imgPath: 'assets/images/gardener-badge.png',
                label: 'Gardener',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 10,
                imgPath: 'assets/images/geologist-badge.png',
                label: 'Geologist',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 11,
                imgPath: 'assets/images/homemaker-badge.png',
                label: 'Homemaker',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 12,
                imgPath: 'assets/images/hospitality-badge.png',
                label: 'Hospitality',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 13,
                imgPath: 'assets/images/housewright-badge.png',
                label: 'Housewright',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 14,
                imgPath: 'assets/images/journalist-badge.png',
                label: 'Journalist',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 15,
                imgPath: 'assets/images/martial_artist-badge.png',
                label: 'Martial Artist',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 16,
                imgPath: 'assets/images/meteorologist-badge.png',
                label: 'Meteorologist',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 17,
                imgPath: 'assets/images/personal_finance-badge.png',
                label: 'Personal Finance',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 18,
                imgPath: 'assets/images/reader-badge.jpg',
                label: 'Reader',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 19,
                imgPath: 'assets/images/sharpshooter-badge.png',
                label: 'Sharpshooter',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 20,
                imgPath: 'assets/images/signaler-badge.png',
                label: 'Signaler',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 21,
                imgPath: 'assets/images/swimmer-badge.png',
                label: 'Swimmer',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 22,
                imgPath: 'assets/images/tailor-badge.png',
                label: 'Tailor',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
            {
                id: 23,
                imgPath: 'assets/images/zoologist-badge.png',
                label: 'Zoologist',
                progressPercentage: 0,
                parts: [
                    {
                        label: 'General Safety',
                        descrip:
                            'Be able to explain safety considerations you need to keep in mind when fishing in a lake or river in your area. What animals may be dangerous to you (or you to them),and how do you handle them? What kinds of dangers in the landscape do you need to be aware of (such as rock embankments, sand bars, crumbling banks, etc.)?',
                        selected: false,
                    },
                    {
                        label: 'Tools',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Food Safety',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Rules and Regulations',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Five Most Common Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Ideal Fishing Spots',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Reels',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Setting Up',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Casting and Catching',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Landing a Fish',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Basic Repairs',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Line',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Replacing Parts',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Plan',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Fishing Outings',
                        descrip: '',
                        selected: false,
                    },
                    {
                        label: 'Documentation',
                        descrip: '',
                        selected: false,
                    },
                ],
            },
        ],
    },
];
