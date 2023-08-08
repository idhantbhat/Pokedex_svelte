<script>
    import { selectedMonsters} from '$lib/components/store'
    export let data


</script>

<!-- Dynamically render each Pokémon using an each block -->
{#each $selectedMonsters as monster (monster.id)}
<div class="monster">
    <div class="pokemon-id">{monster.name}</div>
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{monster.name}.png">
    <div class="pokemon-name">{monster.id}</div>
</div>
{/each}


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