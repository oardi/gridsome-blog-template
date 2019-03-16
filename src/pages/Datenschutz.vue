<template>
	<Layout>
		<div class="container pt-3 pb-4">
			<div
				class="d-flex align-items-center justify-content-center text-center"
				style="height: 300px;"
			>
				<h1 class="display-3">Datenschutz</h1>
			</div>

			<Card title="Datenerhebung">
				<p>
					Es werden keine personenbezogenen Daten erhoben.
				</p>
			</Card>

			<Card title="SSL-Verschlüsselung">
				<p>
					Um die Sicherheit Ihrer Daten bei der Übertragung zu
					schützen, verwenden wir dem aktuellen Stand der Technik
					entsprechende Verschlüsselungsverfahren (z. B. SSL) über
					HTTPS.
				</p>
			</Card>

			<Card title="Änderung unserer Datenschutzbestimmungen">
				<p>
					Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
					damit sie stets den aktuellen rechtlichen Anforderungen
					entspricht oder um Änderungen unserer Leistungen in der
					Datenschutzerklärung umzusetzen, z.B. bei der Einführung
					neuer Services. Für Ihren erneuten Besuch gilt dann die neue
					Datenschutzerklärung.
				</p>
			</Card>

			<Card title="Fragen an den Datenschutzbeauftragten">
				<p>
					Für Fragen zum Datenschutz schicken Sie uns bitte eine
					Nachricht an
					<a
						href="mailto:info@muchadev.com?subject=Datenschutz"
						class="text-primary"
						>info@muchadev.com</a
					>
					mit dem Betreff „Datenschutz“.
				</p>
			</Card>
		</div>
	</Layout>
</template>

<script>
    import Card from '../components/Card';
    export default {
    	components: { Card },
    	metaInfo: {
    		title: 'Datenschutz'
    	}
    };
</script>
