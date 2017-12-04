# Škola koda

Učimo narod programiranju!

Poseti nas na [skolakoda.org](https://skolakoda.org/)

## Preduslovi

Prvo instaliraš [ruby](https://rubyinstaller.org/downloads/). Potom:

```
gem install bundler
gem install jekyll
```

## Razvoj

```
bundle install
bundle exec jekyll serve
```

### Parametri

Da uključi i neobjavljene skice članaka:
```
bundle exec jekyll serve --drafts
```

Da prikazuje samo poslednji post:
```
bundle exec jekyll serve --limit_posts 1
```

Da pravi samo ono što je menjano (najbrže ali eksperimentalno)
```
bundle exec jekyll serve --incremental
```
ili

```
bundle exec jekyll serve --drafts --incremental
```

## TODO

- viber grupa, info za placanje do 15-og
- poslati info bilten, moze se uci na kurseve u toku

- dodati js editor
  - mogu redefinisati console.log?
  https://stackoverflow.com/questions/16616722/sending-all-javascript-console-output-into-a-dom-element
  https://stackoverflow.com/questions/11403107/capturing-javascript-console-log
- php na srpskom: https://phpsrbija.github.io/php-the-right-way/
- dodati paralax pomeranje mišem u gornji prostor
- zen mudrosti na blog
- napraviti letke
- vratiti decji kurs i dodati kurseve u pripremi
- lagane ikonice https://shkspr.mobi/blog/2017/11/super-tiny-website-logos-in-svg/

<!--
sadrzaj:
https://www.toptal.com/algorithms/computability-theory-complexity
https://profesorka.wordpress.com/2012/06/11/pokazivaci-3/
https://profesorka.wordpress.com/2012/06/24/nizovi-2/

slike:
https://pixabay.com/en/children-win-success-video-game-593313/
https://pixabay.com/en/apple-brick-wall-computer-cup-1854101/
https://pixabay.com/en/apple-computer-cup-electronics-1853306/
https://pixabay.com/en/cyber-glasses-virtual-virtual-world-1938449/
https://damjanpavlica.files.wordpress.com/2014/04/stari-programer.jpg
vr: http://www.vrupple.com/wp-content/uploads/2016/11/headset-footer.jpg
-->
