# Asset sources

App icons and screenshots under `public/apps/<slug>/` were collected from the
public Google Play listings of the **7edge Apps** developer profile:
<https://play.google.com/store/apps/dev?id=7291930717928398074>

Assets are stored locally so the production site never depends on Google Play at
request time. When a listing changes, re-download the asset and keep this file
in sync.

| Slug | App | Google Play listing |
| --- | --- | --- |
| `deleted-photo-video-recovery` | Deleted Photo Video Recovery | https://play.google.com/store/apps/details?id=edgerecoveryapp.recoverdata.datarecoveryapp |
| `status-saver-wa` | Status Saver WA: Video Save | https://play.google.com/store/apps/details?id=sevenedge.edgestatussaver.whatsappstatussaver |
| `video-downloader-player` | Video Downloader and Player | https://play.google.com/store/apps/details?id=sevenedge.videosaver.videodownloaderapp |
| `screen-mirroring-cast-to-tv` | Screen Mirroring & Cast to TV | https://play.google.com/store/apps/details?id=miracast.screenmirroring.screencasting |
| `pdf-reader-editor-scanner` | PDF Reader: Editor & Scanner | https://play.google.com/store/apps/details?id=com.sevenedge.pdfreader.docscanner.fileconverter |
| `pdf-reader-document-viewer` | PDF Reader: Document Viewer | https://play.google.com/store/apps/details?id=com.sevenedge.all.documentreader.and.pdfviewer.documents.app.filereader |

Each folder contains:

- `icon.png` — 512×512 app icon
- `screenshot-1.png … screenshot-N.png` — portrait phone screenshots

App descriptions in `data/apps.ts` are original summaries written from the
listings. No ratings, download counts, or other metrics are reproduced.
