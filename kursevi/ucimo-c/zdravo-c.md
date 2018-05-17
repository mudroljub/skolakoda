---
title: Zdravo C
layout: lekcija-c
permalink: /zdravo-c
---

Svaki C program MORA da sadrži 2 stvari:

1. biblioteke
2. `main()` funkciju

Biblioteke su fajlovi u kojima se nalaze neke napisane funkcije koje programer može da koristi kako ne bi morao da sam piše te funkcije (npr: štampanje teksta na standardni izlaz, funkcija `printf`). Kod većine kompajlera, ukoliko se u source ne upišu biblioteke on automatki dodaje osnovne, a to su uglavnom `stdio.h` i `stdlib.h`.

`main()` je funkcija koju program prvu izvršava, tačnije samo nju i zna da izvrši, tako da, u koliko nemamo `main()` funkciju, program neće znati šta da pokrene.

## Prevođenje

Dok programiramo, mi ne pravimo izvršnu verziju programa, već samo source fajl, koji je u C-u `fajl.c`. Da bi od ovog source fajla napravili izvršni fajl (`exe`) potreban nam je kompajler. I za Windows i za Linux platforme postoji dosta programa za kompaliranje.

[Code::Blocks](//www.codeblocks.org/) je freeware, lepo izgleda, jednostavan za korišćenje, koristi GCC kompajler, takođe, koristi se za C i C++. Preporučio bih ga onima koji planiraju da se bave C programiranjem.

## Prvi program

Krećemo sa pisanjem prvog programa:

{:.ulaz}
```c
#include <stdio.h>

int main()
{
  printf("Hello World!");
  return 0;
}
```

Objašnjenje:

```c
#include <stdio.h> // uključivanje biblioteke stdio.h u program

int main() { // početak main funkcije čiji je rezultat broj (int)
  printf("Hello World!"); // poziv funkcije printf sa prosleđenim tekstom
  return 0; // vraćanje broja 0 (oznaka regularnog završetka programa)
} // kraj main funkcije
```


Izvor: Sp1r1t, *Osnove C prorgramiranja*, 2009.
