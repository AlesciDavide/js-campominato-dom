Consegna:
L'utente clicca su un bottone che genererà una griglia di gioco quadrata. Ogni cella ha un numero progressivo, da 1 a 100. Ci saranno quindi 10 caselle per ognuna delle 10 righe. Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


-Bonus
Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
1. con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
2. con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
3. con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;







--------------------------------
-sistemo l'html per ospitare la griglia con relativo css iniziale
-seleziono il container 
-con un event click trovo il modo di sovrascrivere l'intero container per far inizzializzare la griglia
-creo tutti gli elementi per popolare la griglia e aggiungo le classi quando servono.

-creo un'event click per gli elementi della griglia per farli cambiare colore e stampare a console i numeri interni




------------------------------
Consegna
Copiamo la griglia fatta ieri nella nuova repo e aggiungiamo la logica del gioco (attenzione: non bisogna copiare tutta la cartella dell'esercizio ma solo l'index.html, e le cartelle js/ css/ con i relativi script e fogli di stile, per evitare problemi con l'inizializzazione di git).
Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: **nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.



---------------------------
aggiungo una funzione per la generazione di un numero casuale impostando 2 array, uno pieno di numeri a seconda della difficoltà del gioco e uno vuoto dove andranno inseriti i numeri casuali generati randomicamente 
dentro l'eventlistner per l'aggiunta delle classi active creo un'if per decidere quale classe se bomba o punto devo mettere con un blocco per l'eventuale click della bomba
aggiungo una variabile che serve per modificare il punteggio con il click