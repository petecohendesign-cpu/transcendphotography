# DNS rollback snapshot — transcendphoto.net
Captured 2026-07-13, before pointing the domain at Vercel.
To roll back to Squarespace, restore these records exactly.

## Apex (transcendphoto.net) — A records
- 198.185.159.144
- 198.185.159.145
- 198.49.23.144
- 198.49.23.145

## www.transcendphoto.net — CNAME
- ext-sq.squarespace.com

## MX (email — Google Workspace) — NEVER CHANGE THESE
- 1  aspmx.l.google.com
- 5  alt1.aspmx.l.google.com
- 5  alt2.aspmx.l.google.com
- 10 alt3.aspmx.l.google.com
- 10 alt4.aspmx.l.google.com

## Nameservers (managed by Squarespace — leave as-is)
- ns01–ns04.squarespacedns.com / nsone.net entries
