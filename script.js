const teamMembers = [
  {
    name: 'Wooden Airplane (Age: Toddlers):',
    imageURL: 'product images/plane1.jpg',
    activelyPlaying: true,
    type: 'Learning Machine',
    skills: ['Processing information', 'Solving problems', 'Adapting to new situations'],
    strengths: 'Making complex connections',
    weaknesses: 'Susceptible to injury',
    biography: 'The brain is the most complex organ in the human body. It controls everything we do, from thinking and feeling to moving and learning.'
  },
  {
    name: 'Wooden Train Set (Age: 3+):',
    imageURL: 'product images/train1.jpg',
    type: 'Vital Organ',
    skills: ['Pumping blood', 'Regulating Blood Flow', 'Sending electrical signals'],
    strengths: 'Endurance',
    weaknesses: 'Can be affected by stress',
    biography: 'The heart is a muscular organ that plays a vital role in the circulator system.It pumps blood throughout the body, delivering oxygen and nutrients to cells and removing waste products.'
  },
  {
    name: 'Wooden Boat (Age: All ages):',
    imageURL: '',
    type: 'Respiratory Organ',
    skills: ['Gas exchange', 'Breathing', 'Maintaining Plood PH'],
    strengths: 'Adaptability',
    weaknesses: 'Poluution and Smoke',
    biography: 'The lungs are a pair of spongy organs that play a vital role in respiration. They take oxygen from the air we breather and release carbon dioxide, a waste product, from our bodies.'
  },
  {
    name: 'Wooden Block Set (Age: 3+):',
    imageURL: '',
    type: 'Excretory Organ',
    skills: ['Filtering blood', 'Removing waste', 'Maintaining water balance'],
    strengths: 'Filtration',
    weaknesses: 'Disease and Toxins',
    biography: 'The Kidneys are two bean-shaped organs that play a vital role in the excretory system. They filter waste products from the blood, regulate body fluids, and produce hormones.'
  },
  {
    name: 'Wooden Car (All ages): ',
    imageURL: '',
    type: 'Digestive Organ',
    skills: ['Filtering blood', 'Processing nutrients', 'Making proteins'],
    strengths: 'Essential for metabolism and Nutrient storage',
    weaknesses: 'Injury and Toxins',
    biography: 'The liver is the largest and most complex organ in the body. It plays a vital role in digestion, metabolism, and detoxification. The liver filters harmful substances from the blood and processes nutrients from food. '
  },
  {
    name: 'Wooden Car (All ages): ',
    imageURL: '',
    type: 'Digestive Organ',
    skills: ['Filtering blood', 'Processing nutrients', 'Making proteins'],
    strengths: 'Essential for metabolism and Nutrient storage',
    weaknesses: 'Injury and Toxins',
    biography: 'The liver is the largest and most complex organ in the body. It plays a vital role in digestion, metabolism, and detoxification. The liver filters harmful substances from the blood and processes nutrients from food. '
  },
  
];

function generateTeamCards() {
  const teamCardsContainer = document.getElementById('teamCards');

  teamMembers.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('col-md-4');

    // Styling card based on position:
    let backgroundColor;

    switch (member.type.toLowerCase()) {
      case 'color fairy':
        backgroundColor = '#ffc107'; 
        break;
      case 'animal fairy':
        backgroundColor = '#28a745'; 
      case 'flower fairy':
        backgroundColor = '#007bff'; 
        break;
      case 'talent fairy':
        backgroundColor = '#dc3545'; 
        break;
      default:
        backgroundColor = '#800080'; 
    }
    card.style.backgroundColor = backgroundColor;

    // Create a list of Skills with <li> tags
    const skillsList = member.skills
      .map(skill => `<li>${skill}</li>`).join('');

    card.innerHTML = `
          <div class="card">
              <img src="${member.imageURL}" class="img-fluid team-member-image" alt="${member.name}">
              <div class="card-header">${member.name}</div>
              <div class="card-body">
                  <p><strong>Type:</strong> ${member.type}</p>
                  <p><strong>Skills:</strong> 
                      <ul>
                          ${skillsList}
                      </ul>
                  </p>
                  <p><strong>Strengths:</strong> ${member.strengths}</p>
                  <p><strong>Weaknesses:</strong> ${member.weaknesses}</p>
                  <p><strong>Biography:</strong> ${member.biography}</p>
              </div>
          </div>
      `;

    teamCardsContainer.appendChild(card);
  });
}

window.onload = generateTeamCards;