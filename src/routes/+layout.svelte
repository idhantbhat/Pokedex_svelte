<script>
    import { goto } from '$app/navigation';
    
    function navigateToCaptured() {
      goto('/captured');
    }
    function navigateToHome() {
      goto('/all');
    }
  </script>
  
  
  <div class="navbar">
    <div> <!-- Logo or Brand Name can go here if needed -->
    </div>
  
    <button on:click={navigateToCaptured}>
      Captured Pokémon
    </button>
    <button on:click={navigateToHome}>
        Home
      </button>
  </div>
  
  <slot />

  <style>
    .navbar {
      background-color: black;
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: right;
      padding: 0 20px;
      margin-top:-20px;
      color: white;
      width:1165px;
      margin-left: -20px;
    }
  
    .navbar button {
      background-color: #ffffff;
      border: none;
      margin-right: 20px;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
      color: black;
    }
  
    .navbar button:hover {
      background-color: #e0e0e0;
    }
  </style>
  
  