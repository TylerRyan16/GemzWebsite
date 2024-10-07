window.onload = function () {
    // Get page elements
    const navBar = document.getElementById('top_nav_bar');
    const titleSlide = document.getElementById('title-slide');
    const introduction = document.getElementById('introduction-slide');
    const gameplayMechanics = document.getElementById('gameplay-mechanics');
    const gameplayMechanicsContinued = document.getElementById('gameplay-mechanics-continued');
    const storyAndCharacters = document.getElementById('story-and-characters');
    const storyContinued = document.getElementById('story-and-characters-continued');
    const artStyle = document.getElementById('art-style');
    const targetAudience = document.getElementById('target-audience');
    const timeline = document.getElementById('timeline');
    const deliverables = document.getElementById('deliverables');
    const conclusion = document.getElementById('conclusion');
    const gameOverview = document.getElementById('game-overview');
    const accessibility = document.getElementById('accessibility');


    const listItems = document.querySelectorAll('#overview-list h3');
    const overviewContent = document.getElementById('overview-content');

    const sections = [
        introduction,
        gameOverview,
        gameplayMechanics,
        gameplayMechanicsContinued,
        storyAndCharacters,
        storyContinued,
        artStyle,
        targetAudience,
        timeline,
        deliverables,
        accessibility,
        conclusion
    ];

    // Scroll-snapping functionality
    const mainArea = document.getElementById('main-area');

    // Apply scroll snapping to each section
    sections.forEach(section => {
        section.style.scrollSnapAlign = 'start';
        section.style.transition = 'opacity 1.5s ease';
        section.style.opacity = '0'; // Initially invisible
    });

    // Navbar fade out/in on scroll
    mainArea.addEventListener('scroll', () => {
        let scrollValue = mainArea.scrollTop;

        if (scrollValue > 50) {
            navBar.classList.add('inactive');  // Move the navbar out of view
        } else {
            navBar.classList.remove('inactive');  // Bring the navbar back
        }

        // Fade out title slide after scrolling more than 425px
        if (scrollValue > 425) {
            titleSlide.style.opacity = '0';
        } else {
            titleSlide.style.opacity = '1';
        }
    });

    document.getElementById('timelineSlider').addEventListener('input', function () {
        var slider = document.getElementById('timelineSlider');
        var sliderValue = slider.value;
        var timelineDisplay = document.getElementById('timelineDisplay');
        var timelineText = "";
        console.log(sliderValue);

        // Set text based on slider value
        if (sliderValue == 0) {
            timelineText = 'Present Pitch';
        } else if (sliderValue > 0 && sliderValue < 20) {
            timelineText = 'Work on Interview, Proposal, & Fundamental Game Logic';
        } else if (sliderValue == 20) {
            timelineText = 'Interview Inquiry';
        } else if (sliderValue > 20 && sliderValue < 46) {
            timelineText = 'Work on Proposal & More Complex Game Logic';
        } else if (sliderValue == 46) {
            timelineText = 'Present Proposal'
        } else if (sliderValue > 46 && sliderValue < 100) {
            timelineText = 'Work on Art & Gameplay Specifics for Level 1'
        } else if (sliderValue == 100) {
            timelineText = 'Final Game (1 Level) Demo'
        }

        timelineDisplay.textContent = timelineText;

        // Calculate the new position of the text
        var sliderWidth = slider.offsetWidth;
        var thumbWidth = 20;  // Thumb width of the slider (adjust if needed)
        var newPos = (sliderValue / 100) * (sliderWidth - thumbWidth);

        // Set the position of the text
        timelineDisplay.style.left = newPos + 'px';
    });

    // Visibility observer
    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add 'visible' class when in view
                entry.target.style.opacity = '1'; // Make the element visible
            } else {
                entry.target.classList.remove('visible'); // Remove 'visible' class when out of view
                entry.target.style.opacity = '0'; // Make the element invisible
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => observer.observe(section));

    // Content for the overview section
    const content = {
       'Gameplay Mechanics': `
        <div class="top-div">
            <div class="item"><img src="images/movement-icon.png" alt="Movement icon" />
                <div class="text-content">
                    <a href='#movement-tag'><h3>Movement</h3></a>
                    <p>The player can fly around the world and control their speed.</p>
                </div>
            </div>
            <div class="item"><img src="images/tile-placement-icon.png" alt="Tile Placement icon" />
                <div class="text-content">
                    <a href="#movement-tag"><h3>Tile Placement</h3></a>
                    <p>Tiles are placed on a grid system.</p>
                </div>
            </div>
        </div>
        <div class="bottom-div">
            <div class="item"><img src="images/expand-factory-icon.png" alt="Factory Expand icon" />
                <div class="text-content">
                    <a href="#expand-trade-tag"><h3>Expand Your Factory</h3></a>
                    <p>Expand your factory to other planets and increase resource output.</p>
                </div>
            </div>
            <div class="item"><img src="images/trade-economy-icon.jpg" alt="Trade icon" />
                <div class="text-content">
                    <a href="#expand-trade-tag"><h3>Trade & Economy</h3></a>
                    <p>Trade resources with alien factions and build a thriving economy.</p>
                </div>
            </div>
        </div>
    `,
        'Story & Characters': `
            <div class="top-div">
                <div class="item">
                    <div class="text-content">
                        <h3>Player</h3>
                        <p>Players take on the role of an interplanetary entrepreneur managing mining operations.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="text-content">
                        <h3>Alien Factions</h3>
                        <p>Build relationships with different alien factions that have their own cultures and needs.</p>
                    </div>
                </div>
            </div>
            <div class="bottom-div">
                <div class="item">
                    <div class="text-content">
                        <h3>Missions</h3>
                        <p>Complete missions to gather rare resources, gain influence, and unlock new technologies.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="text-content">
                        <h3>Game Lore</h3>
                        <p>Explore the rich backstory of the Gemz universe and its intergalactic politics.</p>
                    </div>
                </div>
            </div>
        `,
        'Art': `
            <div class="top-div">
                <div class="item">
                    <div class="text-content">
                        <h3>Level Design</h3>
                        <p>Explore beautifully designed alien planets with distinct visual aesthetics.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="text-content">
                        <h3>Resource Art</h3>
                        <p>Each resource in the game has a unique and detailed design created in Blender.</p>
                    </div>
                </div>
            </div>
            <div class="bottom-div">
                <div class="item">
                    <div class="text-content">
                        <h3>Character Designs</h3>
                        <p>Alien factions and characters are brought to life with unique art styles.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="text-content">
                        <h3>Technology Art</h3>
                        <p>Technology and machinery have their own distinct look and feel in the game world.</p>
                    </div>
                </div>
            </div>
        `,
        'Demographic': `
            <div class="top-div">
                <div class="item">
                    <div class="text-content">
                        <h3>Target Audience</h3>
                        <p>Designed for players who enjoy strategic decision-making and are conscious of environmental and resource management themes.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="text-content">
                        <h3>Game Platforms</h3>
                        <p>The game will be available on PC with plans to expand to consoles in the future.</p>
                    </div>
                </div>
            </div>
            <div class="bottom-div">
                <div class="item">
                    <div class="text-content">
                        <h3>Core Audience</h3>
                        <p>Fans of simulation and strategy games will enjoy the balance of resource management and automation.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="text-content">
                        <h3>Modding & Community</h3>
                        <p>We plan to support a modding community and encourage custom content creation.</p>
                    </div>
                </div>
            </div>
        `,
        'Timeline': `
            <div class="top-div">
                <div class="item">
                    <div class="text-content">
                        <h3>Pre-production</h3>
                        <p>Core gameplay loop and early designs are completed.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="text-content">
                        <h3>Development</h3>
                        <p>Focus is on refining game mechanics and assets.</p>
                    </div>
                </div>
            </div>
            <div class="bottom-div">
                <div class="item">
                    <div class="text-content">
                        <h3>Next Milestone</h3>
                        <p>Presenting a playable demo of the first level.</p>
                    </div>
                </div>
                <div class="item">
                    <div class="text-content">
                        <h3>Post-launch Goals</h3>
                        <p>Expand the game with new factions, planets, and advanced mechanics.</p>
                    </div>
                </div>
            </div>
        `,
        'Deliverables': `
    <div class="top-div">
        <div class="item">
            <div class="text-content">
                <h3>4 Gem Types</h3>
                <p>Includes different gem types players can mine and refine.</p>
            </div>
        </div>
        <div class="item">
            <div class="text-content">
                <h3>3 Mining Objects</h3>
                <p>Tools and structures used for mining gems on different planets.</p>
            </div>
        </div>
    </div>
    <div class="bottom-div">
        <div class="item">
            <div class="text-content">
                <h3>Working Economy System</h3>
                <p>Fully functioning trade and economy system with alien factions.</p>
            </div>
        </div>
        <div class="item">
            <div class="text-content">
                <h3>One Completed Level</h3>
                <p>Includes a fully playable first level with all core mechanics.</p>
            </div>
        </div>
    </div>
`,
    };

    // Inject into html
    overviewContent.innerHTML = `<p>${content['Gameplay Mechanics']}</p>`;

    // Add click event listener to each overview item
    listItems.forEach(item => {
        item.addEventListener('click', function () {
            listItems.forEach(h3 => h3.classList.remove('active'));
            this.classList.add('active');
            const selectedText = this.textContent.trim();
            overviewContent.innerHTML = `<p>${content[selectedText]}</p>`;
        });
    });
};
