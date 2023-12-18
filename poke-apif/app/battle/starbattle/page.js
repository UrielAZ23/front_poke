'use client'
import React, { useState, useEffect, use } from 'react';
import Link from "next/link";
import { useUserContext } from '../../components/Context/UserContextProvider';

const Starbattle = () => {

  const { user } = useUserContext(); //para el usuario


  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const [time, setAttackPower] = useState(null);
  const [fourthPokemonInfo, setFourthPokemonInfo] = useState(null);
  const [showFourthPokemon, setShowFourthPokemon] = useState(true);
  const [enemyselec, setEnemySelec] = useState(false);
  const [confirmedPokemon, setConfirmedPokemon] = useState(false);
  const [confirmedAttack, setConfirmedAttack] = useState(false);
  const [confirmedPower, setConfirmedPower] = useState(false);
  const [battleResult, setBattleResult] = useState(null);//para el envio de resultados
  const [botonPresionado, setBotonPresionado] = useState(false);
  const [botonPresionado2, setBotonPresionado2] = useState(false);
  const [selectedAttack, setSelectedAttack] = useState(null);

  /*
  const dataresum=[
    {
      "idUsuario": user.id,
      "nombreUsuario": user.nombre,
      "idPokemon": "1",
      "idPokeIA":"4",
      "idMove": "1",
      "bet": "10"
    }
  ]

  const dataresult=[
    {
      "isWiner" : true,
      "NombrePokemon" : selectedPokemon.name,
      "AtaquePokemon" : selectedAttack.name,
      "NombrePokeIA" : "fourthPokemonInfo,name",
      "AtaquePokeIA" : "fourthPokemonInfo.AtaquePokeIA",
      "Tiempo" : "75"
    }
  ]
  */

  const sabpokedata = [
    {
      "id": 1,
      "name": "Bulbasaur",
      "type": "Grass/Poison",
      "hp": 45,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "attacks": [
        { "id": 1, "name": "Tackle" },
        { "id": 2, "name": "Growl" },
        { "id": 3, "name": "Leech Seed" },
        { "id": 4, "name": "Vine Whip" }
      ]
    },
    {
      "id": 2,
      "name": "Charmander",
      "type": "Fire",
      "hp": 39,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "attacks": [
        { "id": 5, "name": "Scratch" },
        { "id": 6, "name": "Growl" },
        { "id": 7, "name": "Ember" },
        { "id": 8, "name": "Leer" }
      ]
    },
    {
      "id": 3,
      "name": "Squirtle",
      "type": "Water",
      "hp": 44,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "attacks": [
        { "id": 9, "name": "Tackle" },
        { "id": 10, "name": "Tail Whip" },
        { "id": 11, "name": "Bubble" },
        { "id": 12, "name": "Withdraw" }
      ]
    },
    {
      "id": 4,
      "name": "Pikachu",
      "type": "Electric",
      "hp": 35,
      "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/35.png",
      "attacks": [
        { "id": 13, "name": "Quick Attack" },
        { "id": 14, "name": "Thunder Shock" },
        { "id": 15, "name": "Tail Whip" },
        { "id": 16, "name": "Growl" }
      ]
    }
  ]

  /* //Quitar las proximas 3 lineas
              const data=sabpokedata;
              setPokemonData(data);
              setFourthPokemonInfo(data[3]); */


  useEffect(() => {
    // Realiza la petición a la API de Pokemon
    const fetchPokemonData = async () => {
      try {
        const response = await fetch('https://api.example.com/pokemon');
        const data = await response.json();
        setPokemonData(data);

        // Muestra la información del cuarto Pokémon
        setFourthPokemonInfo(data[3]);
      } catch (error) {
        console.error('Error fetching Pokemon data:', error);
        //Quitar las proximas 3 lineas
        const data = sabpokedata;
        setPokemonData(data);
        setFourthPokemonInfo(data[3]);
      }
    };

    fetchPokemonData();
  }, []);

  const handlePokemonSelect = (pokemon) => {
    if (!confirmedPokemon) {
      setSelectedPokemon(pokemon);
      setSelectedAttack(null); // Reinicia la selección de ataques al cambiar de Pokemon
      setConfirmedAttack(false);
      setConfirmedPower(false);
    }
  };

  const handleAttackSelect = (attack) => {
    if (!confirmedAttack) {
      setSelectedAttack(attack);
      setConfirmedPower(false);
    }
  };

  const handleTimeSelect = (power) => {
    if (!confirmedPower) {
      setAttackPower(power);
    }
  };

  const handleConfirmPokemon = () => {
    setConfirmedPokemon(true);
  };

  const handleConfirmAttack = () => {
    setConfirmedAttack(true);
  };

  const handleConfirmTime = () => {
    setConfirmedPower(true);
  };

  const handleOkButton = () => {
    setBotonPresionado(true);
    setShowFourthPokemon(true);
    setEnemySelec(true);
  };



  /// para el envio de informacion a a la api y espera de la respuesta


  const handleBattleSubmit = async () => {
    try {
      const userData = {
        /*idUsuario: user.iduser,*/
        nombreUsuario: user.user,
        idPokemon: selectedPokemon.id,
        idPokeIA: fourthPokemonInfo.id,
        idMove: selectedAttack.id,
        bet: time,
      };

      const response = await fetch('https://api.example.com/battle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });

      const data = await response.json();
      setBattleResult(data);


    } catch (error) {
      console.error('Error submitting battle:', error);

      // Simulando respuesta de datos locales en caso de error
      const dataresult = {
        "isWiner": true,
        "nombrePokemon": selectedPokemon.name,
        "ataquePokemon": selectedAttack.name,
        "nombrePokeIA": "fourthPokemonInfo,name",
        "ataquePokeIA": "fourthPokemonInfo.AtaquePokeIA",
        "tiempo": "75"
      };


      setBattleResult(dataresult);
    }
    setBotonPresionado2(true);
  };

  return (
    <div>
      {showFourthPokemon && (
        <div>
          <h3>Un pokemon Salvaje a aparcido:</h3>
          {fourthPokemonInfo && (
            <div>
              <p>ID: {fourthPokemonInfo.id}, Nombre: {fourthPokemonInfo.name}, Tipo: {fourthPokemonInfo.type}</p>
              <p>HP: {fourthPokemonInfo.hp}</p>
              <img src={fourthPokemonInfo.sprite} alt={fourthPokemonInfo.name} />
            </div>
          )}

          <button onClick={handleOkButton} disabled={botonPresionado} >OK</button>
        </div>
      )}

      {showFourthPokemon && enemyselec && (
        <div>
          <h2>Selecciona un Pokemon:</h2>
          <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
            {pokemonData.slice(0, 3).map((pokemon) => (
              <div key={pokemon.id} onClick={() => handlePokemonSelect(pokemon)} style={{ cursor: 'pointer' }}>
                <p>{pokemon.name}</p>
                <img src={pokemon.sprite} alt={pokemon.name} style={{ maxWidth: '50px' }} />
              </div>
            ))}
          </div>

          {selectedPokemon && !confirmedPokemon && (
            <div>
              <p>Has seleccionado a: {selectedPokemon.name}</p>
              <button onClick={handleConfirmPokemon}>Confirmar Pokemon</button>
            </div>
          )}

          {confirmedPokemon && selectedPokemon && !confirmedAttack && (
            <div>
              <h3>Selecciona un ataque para {selectedPokemon.name}:</h3>
              <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px' }}>
                {selectedPokemon.attacks.map((attack) => (
                  <div key={attack.id} onClick={() => handleAttackSelect(attack)} style={{ cursor: 'pointer' }}>
                    <p>{attack.name}</p>
                  </div>
                ))}
              </div>
              {selectedAttack && (
                <div>
                  <p>Has seleccionado el ataque: {selectedAttack.name}</p>
                  <button onClick={handleConfirmAttack}>Confirmar Ataque</button>
                </div>
              )}
            </div>
          )}

          {confirmedAttack && selectedAttack && !confirmedPower && (
            <div>
              <h3>Selecciona el tiempo a apostar:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '10px' }}>
                <div onClick={() => handleTimeSelect(10)} style={{ cursor: 'pointer' }}>
                  <p>10</p>
                </div>
                <div onClick={() => handleTimeSelect(100)} style={{ cursor: 'pointer' }}>
                  <p>100</p>
                </div>
                <div onClick={() => handleTimeSelect(1000)} style={{ cursor: 'pointer' }}>
                  <p>1000</p>
                </div>
              </div>
              {time && (
                <div>
                  <p>Has seleccionado la cantidad de tiempo: {time}</p>
                  <button onClick={handleConfirmTime}>Confirmar Tiempo</button>
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {confirmedPower && selectedAttack && selectedPokemon && (
        <div>
          <h3>Resumen:</h3>
          <p>Pokemon: {selectedPokemon.name}</p>
          <p>Tipo: {selectedPokemon.type}</p>
          <p>Ataque seleccionado: {selectedAttack.name}</p>
          <p>Tiempo apostado: {time}</p>
          <button onClick={handleBattleSubmit} disabled={botonPresionado2}>COMBATIR</button></div>

      )}



      {battleResult && (
        <div>
          <h3>Resultado de la Batalla:</h3>
          <br></br>
          <p>Resultado del combate {battleResult.isWiner ? 'Victoria' : 'Derrota'}</p>
          <p>Nombre del Pokémon: {battleResult.nombrePokemon}</p>
          <p>Ataque Pokémon: {battleResult.ataquePokemon}</p>
          <p>Nombre del Pokémon Enemigo: {battleResult.nombrePokeIA}</p>
          <p>Ataque del Pokémon enemigo: {battleResult.ataquePokeIA}</p>
          <p>Tiempo: {battleResult.tiempo}</p>

          <Link className="linkbotton" href={"/battle"}>
            Fin del combate
          </Link>
        </div>

      )}



    </div>
  );
};

export default Starbattle;

