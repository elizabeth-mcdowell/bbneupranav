import React from 'react';
import './MainPage.css';

const MainPage = () => {
  const players = [
    { name: 'Emilia', photo: '/images/castphotos/emilia.jpg' },
    { name: 'Ryan', photo: '/images/castphotos/ryan.jpg' },
    { name: 'Megan', photo: '/images/castphotos/megan.jpg' },
    { name: 'Andrew', photo: '/images/castphotos/andrew.jpg' },
    { name: 'Nick', photo: '/images/castphotos/nick.jpg' },
    { name: 'Jonah', photo: '/images/castphotos/jonah.jpg' },
    { name: 'Drew', photo: '/images/castphotos/drew.jpg' },
    { name: 'Stephanie', photo: '/images/castphotos/steph.jpg' },
    { name: 'Nicole', photo: '/images/castphotos/nicole.jpg' },
    { name: 'Sarah', photo: '/images/castphotos/sarah.jpg' },
    { name: 'Yasmine', photo: '/images/castphotos/yasmine.jpg' },
    { name: 'Michael', photo: '/images/castphotos/michael.jpg' },
    { name: 'Kamille', photo: '/images/castphotos/kamille.jpg' },
    { name: 'Anna', photo: '/images/castphotos/anna.jpg' },
    { name: 'Caroline', photo: '/images/castphotos/caroline.jpg' },
  ];

  const funPhotos = Array.from({ length: 8 }, (_, i) => `/images/funphotos/${i + 1}.jpg`);
  const bumblebattleroyal = Array.from({ length: 4 }, (_, i) => `/images/bumblebattleroyal/${i + 1}.jpg`);
  return (
    <div className="main-page">
      {/* Header Section */}
      <div className="header">
        <h1>BBNEU</h1>
      </div>
      <div className="pranav">

        <img src="/images/pranav/1.jpg" alt="Pranav 1" className="pranav-photo" />
        <div className="header-text">
          <p>Once upon a time, a boy named Pranav had $20, duct tape, and a dream. A dream that would transform the lives of all of those in Survivor Northeastern as they knew it. </p>
          <p>He created a semester long game of Big Brother. During this game, he invented new challenges, got sponsored by Bumble, created his own awards and proved you do not need a budget to make a season</p>
          <p></p>
        </div>
        <img src="/images/pranav/2.jpg" alt="Pranav 2" className="pranav-photo" />
      </div>
      <hr className="section-divider" />
      {/* Players Section */}
      <h2 className="section-title">Ranked Players</h2>
      <div className="players-grid">
        {players.map((player, index) => (
          <div className="player-card" key={index}>
            <img src={player.photo} alt={player.name} className="player-photo" />
            <div className="player-name">{player.name}</div>
          </div>
        ))}
      </div>
      <hr className="section-divider" />
      {/* Voting Chart */}
      <h2 className="section-title">Voting Chart</h2>
      <img src="/images/votingchart.png" alt="Voting Chart" className="voting-chart" />
      <hr className="section-divider" />
      {/* Bumble Photos Section */}
      <h2 className="section-title">Bumble Battle Royal</h2>
      <div className="fun-photos">
        {bumblebattleroyal.map((photo, index) => (
          <img src={photo} alt={`Fun Photo ${index + 1}`} key={index} className="fun-photo" />
        ))}
      </div>
      {/* Fun Photos Section */}
      <hr className="section-divider" />
      <h2 className="section-title">Fun Photos</h2>
      <div className="fun-photos">
        {funPhotos.map((photo, index) => (
          <img src={photo} alt={`Fun Photo ${index + 1}`} key={index} className="fun-photo" />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
