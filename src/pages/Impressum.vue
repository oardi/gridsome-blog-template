<template>
	<Layout>
		<div class="container pt-3 pb-4">
			<div
				class="d-flex align-items-center justify-content-center text-center"
				style="height: 300px;"
			>
				<h1 class="display-3">Impressum</h1>
			</div>

			<Card title="Verantwortlich für die Seite">
				Ardian Shala
			</Card>

			<Card title="Design und Umsetzung">
				Ardian Shala
			</Card>

			<Card title="Haftungshinweis">
				Der Autor übernimmt keinerlei Gewähr für die Aktualität,
				Korrektheit oder Vollständigkeit der bereitgestellten Inhalte.
				Haftungsansprüche gegen den Author, die durch die Nutzung oder
				Nichtnutzung der dargestellten Inhalte verursacht wurden, sind
				grundsätzlich ausgeschlossen.
			</Card>

			<Card title="Verlinkte Seiten">
				Für den Inhalt der verlinkten Seiten sind ausschließlich deren
				Betreiber verantwortlich.
			</Card>

			<Card title="Urheberrecht">
				Der Autor ist bestrebt, in allen Publikationen die Urheberrechte
				der verwendeten Bilder, Grafiken und Texte zu beachten, von ihm
				selbst erstellte Bilder, Grafiken und Texte zu nutzen oder auf
				lizenzfreie Grafiken und Texte zurückzugreifen.
			</Card>
		</div>
	</Layout>
</template>

<script>
    import Card from '../components/Card';
    export default {
    	components: { Card },
    	metaInfo: {
    		title: 'Impressum'
    	}
    };
</script>
