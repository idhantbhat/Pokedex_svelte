<script>
    import { selectedMonsters } from '$lib/components/store'
    import { generations } from './generations'
    import PokeSquare from '$lib/components/PokeSquare.svelte';
    export let data
    let filterWord = ''
    function getPokemonId(url) {
        const parts = url.split("/");
        return parts[parts.length - 2];
    }

</script>


<div class="regions">
    {#each generations as generation}
        <a href={`/${generation.main_region}`} class="generation-region button">{generation.main_region}</a>
    {/each}
</div>

<input id="input" type="text" bind:value={filterWord}>

<div class="monsters">
    {#each data.monsters as monster}
    {#if monster.name.toLowerCase().includes(filterWord.toLowerCase())}
    <PokeSquare 
        monsterName={monster.name}
        monsterId ={getPokemonId(monster.url)}
        />
        {/if}
    {/each}
</div>

<style>
    a.generation-region.button {
    text-decoration: none; /* removes underline */
    color: inherit; /* keeps the color the same as surrounding text or specify a color if you want */
    background-color: transparent; /* if needed */
    cursor: pointer; /* makes it look clickable */
    /* other styling here to make it look like a button... */
    border: 2px solid black;
    padding: 5px;
    margin-bottom: 5px; 
    background: #c0c0c0; 
    transition: background 0.3s;
    margin-right:30px;  
    align-items: center;
    display: inline-block;
}

a.generation-region.button:hover {
    background: linear-gradient(135deg, #c0c0c0, #808080);
    text-decoration: none; /* ensures underline doesn't appear on hover */
}

    .regions {
        display: flex;
        justify-content: center;
    }

    .generation-region {
        border: 2px solid black;
        padding: 5px;
        margin-bottom: 5px; 
        background: #c0c0c0; 
        transition: background 0.3s;
        margin-right:30px;  
        align-items: center;
        
    }

    .generation-region:hover {
        background: linear-gradient(135deg, #c0c0c0, #808080); 
    }

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
    #input {
    margin-left: 500px;
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid black;  /* You need to specify a width for your border */
    border-radius: 50px;  /* 100px would be too much for a regular input, so adjusted it to 50px */
    padding: 10px 20px;  /* This is just a suggestion to give some space around the text inside the input */
}
</style>
