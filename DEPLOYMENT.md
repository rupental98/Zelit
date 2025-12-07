# Instrukcja wdrożenia na OVH

## Problem z MIME type

Jeśli widzisz błąd:
```
Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of ""
```

To oznacza, że serwer nie zwraca poprawnego Content-Type dla plików JavaScript.

## Rozwiązanie

### Dla Apache (domyślne na OVH)

1. **Plik `.htaccess` został już utworzony** w katalogu `public/` i będzie automatycznie skopiowany do `dist/` podczas builda.

2. **Upewnij się, że mod_rewrite jest włączony** na serwerze OVH:
   - W panelu OVH sprawdź ustawienia Apache
   - Włącz mod_rewrite jeśli nie jest włączony

3. **Prześlij zawartość katalogu `dist/` na serwer**:
   ```bash
   npm run build
   # Następnie prześlij zawartość dist/ na serwer OVH
   ```

4. **Sprawdź, czy plik `.htaccess` jest w głównym katalogu** na serwerze (tam gdzie jest `index.html`)

### Dla nginx

Jeśli używasz nginx, użyj konfiguracji z pliku `nginx.conf` w katalogu `public/`.

## Weryfikacja

Po wdrożeniu sprawdź w konsoli przeglądarki (F12 → Network), czy pliki `.js` mają header:
```
Content-Type: application/javascript
```

Jeśli nadal widzisz problem, sprawdź:
1. Czy plik `.htaccess` jest na serwerze
2. Czy Apache ma włączony mod_mime i mod_rewrite
3. Czy masz uprawnienia do modyfikacji `.htaccess` na serwerze

