// PRESSURE Character Sheet Viewer - jQuery Implementation

$(document).ready(function() {
    let characters = [];
    let currentIndex = 0;

    // Load character data
    $.getJSON('data/characters.json', function(data) {
        characters = data.characters;
        
        // Populate character select dropdown
        characters.forEach(function(char, index) {
            $('#character-select').append(
                $('<option></option>')
                    .val(index)
                    .text(char.name + ' - ' + char.nickname)
            );
        });
        
        // Load first character by default
        if (characters.length > 0) {
            loadCharacter(0);
        }
    }).fail(function() {
        alert('Error loading character data. Make sure characters.json is in the same directory.');
    });

    // Character select change handler
    $('#character-select').on('change', function() {
        const selectedIndex = parseInt($(this).val());
        if (!isNaN(selectedIndex)) {
            currentIndex = selectedIndex;
            loadCharacter(currentIndex);
        }
    });

    // Previous button handler
    $('#prev-char').on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            $('#character-select').val(currentIndex);
            loadCharacter(currentIndex);
        }
    });

    // Next button handler
    $('#next-char').on('click', function() {
        if (currentIndex < characters.length - 1) {
            currentIndex++;
            $('#character-select').val(currentIndex);
            loadCharacter(currentIndex);
        }
    });

    // Function to load and display a character
    function loadCharacter(index) {
        const char = characters[index];
        
        // Update button states
        $('#prev-char').prop('disabled', index === 0);
        $('#next-char').prop('disabled', index === characters.length - 1);
        
        // Display character name
        $('#char-name').text(char.name);
        
        // Display attributes
        $('#attr-charisma').text(char.attributes.charisma);
        $('#attr-agility').text(char.attributes.agility);
        $('#attr-strength').text(char.attributes.strength);
        $('#attr-education').text(char.attributes.education);
        
        // Display penalties
        $('#penalty-charisma').text(char.penalties.charisma || 0);
        $('#penalty-agility').text(char.penalties.agility || 0);
        $('#penalty-strength').text(char.penalties.strength || 0);
        $('#penalty-education').text(char.penalties.education || 0);
        
        // Display skills (only non-zero values)
		var y0 = 146;
		var y = y0;
		var dy = 33.5;
		displaySkill('bargain', char.skills.bargain, char.attributes.charisma, y);y += dy;
        displaySkill('con', char.skills.con, char.attributes.charisma, y);y += dy;
        displaySkill('leadership', char.skills.leadership, char.attributes.charisma, y);y += dy;
        displaySkill('perception', char.skills.perception, char.attributes.charisma, y);y += dy;
        displaySkill('streetwise', char.skills.streetwise, char.attributes.charisma, y);y += dy;
        
        displaySkill('stealth', char.skills.stealth, char.attributes.agility, y);y += dy;
        displaySkill('drive', char.skills.drive, char.attributes.agility, y);y += dy;
        displaySkill('pilot', char.skills.pilot, char.attributes.agility, y);y += dy;
        displaySkill('ranged', char.skills.ranged, char.attributes.agility, y);y += dy;
        displaySkill('dodge', char.skills.dodge, char.attributes.agility, y);y += dy;
        
        displaySkill('climb', char.skills.climb, char.attributes.strength, y);y += dy;
        displaySkill('hand_to_hand', char.skills.hand_to_hand, char.attributes.strength, y);y += dy;
        displaySkill('leap', char.skills.leap, char.attributes.strength, y);y += dy;
        displaySkill('melee', char.skills.melee, char.attributes.strength, y);y += dy;
        displaySkill('swim', char.skills.swim, char.attributes.strength, y);y += dy;
        
        displaySkill('computers', char.skills.computers, char.attributes.education, y);y += dy;
        displaySkill('engineering', char.skills.engineering, char.attributes.education, y);y += dy;
        displaySkill('medicine', char.skills.medicine, char.attributes.education, y);y += dy;
        displaySkill('navigation', char.skills.navigation, char.attributes.education, y);y += dy;
        displaySkill('science', char.skills.science, char.attributes.education, y);y += dy;
        
        // Display combat/status values
        $('#damage').text(char.damage);
        $('#pressure-bonus').text(char.pressureBonus);
        $('#pressure-level').text(char.pressureLevel);
        $('#experience').text(char.experiencePoints || 0);
        
        // Display episodes
        $('#episodes').text(char.episodes || '');
        
        // Display equipment
        $('#equipment').text(char.equipment);
    }

    // Helper function to display skill and total
    function displaySkill(skillName, skillValue, attributeValue, y) {
        // Convert skill name from underscore to camelCase for IDs
        const camelCaseName = skillName.replace(/_([a-z])/g, function(g) { 
            return g[1].toUpperCase(); 
        });
        
        // Display skill value (0 if not trained)
        $('#skill-' + camelCaseName).text(skillValue || 0).css("top", y + "px").addClass("skill");
        
        // Calculate and display total (Attribute + Skill)
        const total = attributeValue + (skillValue || 0);
        $('#total-' + camelCaseName).text(total).css("top", y + "px").addClass("total");
    }

    // Handle keyboard navigation
    $(document).on('keydown', function(e) {
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            $('#prev-char').click();
        } else if (e.key === 'ArrowRight' && currentIndex < characters.length - 1) {
            $('#next-char').click();
        }
    });
});
