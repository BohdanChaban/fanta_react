import React from 'react';
import {Footer, FooterTab, Button, Text} from 'native-base';

const AppFooter = () => (
	<Footer>
		<FooterTab>
			<Button active>
				<Text>Clubs</Text>
			</Button>
			<Button>
				<Text>Players</Text>
			</Button>
		</FooterTab>
	</Footer>
);

export default AppFooter;
