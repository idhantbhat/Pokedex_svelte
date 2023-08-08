<script>
    import { selectedMonsters } from './store'; // Importing selectedMonsters

    function getPokemonId(url) {
        const parts = url.split("/");
        return parts[parts.length - 2];
    }

    function addMonsterToCaptured(monsterName, monsterId) {
        selectedMonsters.update(monsters => {
            return [...monsters, { id: monsterName, name: monsterId }];
        });
    }

    export let monsterId = null;
    export let monsterName = null;
</script>

<div on:click={() => addMonsterToCaptured(monsterName, monsterId)} class="monster">
    <div class="pokemon-id">{monsterId}</div>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{monsterId}.png">
    <div class="pokemon-name">{monsterName}</div>
</div>


<style>
.monsters {
    display: flex;
    flex-wrap: wrap;
}

.monster {
    width: 100px;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background: #c0c0c0;
    transition: background 0.3s;
}

.monster:hover {
    background: linear-gradient(135deg, #c0c0c0, #808080);
    cursor:pointer;
}

.pokemon-id {
    position: absolute;
    top: 0;
    left: 0;
}

.pokemon-name {
    margin-top: 10px;
}
</style>