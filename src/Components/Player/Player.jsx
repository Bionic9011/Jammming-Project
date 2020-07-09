import React from 'react';
import './Player.css';

class Player extends React.Component {
	render() {
		if (!this.props.currentTrackId) {
			return null;
		}
		const trackUrl = `https://open.spotify.com/track/1HF6P40Z7nfExGaB1Gk99v?si=2YVqwmAnTxWSrWRBHF9WSw`;
		return (
			<div className="Player">
				<h2>Listen</h2>
				<br/>
				<iframe
					src={trackUrl}
					width="500" height="80"
					allowtransparency="true"
					frameBorder="0"
					allow="encrypted-media"
                    title="Web Playback SDK Quick Start"></iframe>
			</div>
		);
	}
}

export default Player;