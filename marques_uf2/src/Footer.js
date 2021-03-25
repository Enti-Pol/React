import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
<div>
<div class="more_info">
	<h2>Más información</h2>
	<p>Copyright (c) 2020 - ENTI M06-UF1</p>
</div>

<div class="social_networks">
	<h2>Redes sociales</h2>
	<ul>
		<li><a href="https://tuenti.es/amongmeme" class="tuenti">Tuenti</a></li>
		<li><a href="https://forocoches.com/amongmeme" class="forocoches">Forocoches</a></li>
		<li><a href="https://twitter.com/amongmeme" class="twitter">Twitter</a></li>
		<li><a href="https://reddit.com/r/amongmeme" class="reddit">Reddit</a></li>
	</ul>
</div>
</div>
    );
  }
}

export default Footer;
