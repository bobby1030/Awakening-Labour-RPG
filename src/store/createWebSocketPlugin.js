export default function createWebSocketPlugin() {
	return store => {
		store.subscribe((mutation, state) => {
			if (['updateInputData', 'updateStrike', 'updateBonus'].indexOf(mutation.type) !== -1) {
				store.$socket.sendObj({
					mutationType: mutation.type,
					payload: mutation.payload
				});
			}
		});
	};
}
