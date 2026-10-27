'use client'

import { useEffect, useRef, useState } from 'react'
import { Download, Eye, ExternalLink, X } from 'lucide-react'

type CertificateViewerProps = {
  title: string
  issuer: string
  url: string
}

/**
 * "View Certificate" button + popup (modal).
 *
 * HTML er built-in <dialog> element use korechi:
 *   dialog.showModal()  -> popup khole, pichoner page click kora jay na
 *   dialog.close()      -> popup bondho
 *   Esc key             -> browser nijei bondho kore dey (free!)
 *
 * PDF ta <iframe> e dekhai. iframe ta shudhu popup khulle-i load hoy,
 * jate page load er shomoy 5 ta PDF ekshathe download na hoy.
 */
export function CertificateViewer({ title, issuer, url }: CertificateViewerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [open, setOpen] = useState(false)

  const openDialog = () => {
    dialogRef.current?.showModal()
    setOpen(true)
  }

  const closeDialog = () => dialogRef.current?.close()

  // Popup khola thakle pichoner page scroll bondho rakhi
  useEffect(() => {
    if (!open) return
    const root = document.documentElement
    const previous = root.style.overflow
    root.style.overflow = 'hidden'
    return () => {
      root.style.overflow = previous
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={openDialog}
        className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-primary/30 px-4 py-2 text-sm font-medium text-primary transition-colors hover:border-primary hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <Eye className="size-4" aria-hidden="true" />
        View Certificate
      </button>

      <dialog
        ref={dialogRef}
        aria-label={`${title} certificate`}
        onClose={() => setOpen(false)}
        // Kalo porda (backdrop) e click korle bondho: click ta dialog er
        // nijer upor porle (bhitorer content e na) close kori
        onClick={(e) => {
          if (e.target === e.currentTarget) closeDialog()
        }}
        className="cert-dialog m-auto w-[min(56rem,calc(100vw-2rem))] max-w-none overflow-hidden rounded-xl border border-border bg-card p-0 text-foreground shadow-2xl"
      >
        <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4">
          <div className="min-w-0">
            <h3 className="truncate font-semibold tracking-tight">{title}</h3>
            <p className="mt-0.5 text-sm text-primary">{issuer}</p>
          </div>
          <div className="flex shrink-0 items-center gap-1">
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open in new tab"
              title="Open in new tab"
              className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
            </a>
            <a
              href={url}
              download
              aria-label="Download certificate"
              title="Download"
              className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <Download className="size-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={closeDialog}
              aria-label="Close"
              autoFocus
              className="inline-flex size-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              <X className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="h-[min(70vh,40rem)] bg-secondary/40">
          {open && (
            <iframe
              src={`${url}#view=FitH&toolbar=0`}
              title={`${title} certificate PDF`}
              className="size-full"
            />
          )}
        </div>

        <p className="border-t border-border px-5 py-3 text-xs text-muted-foreground">
          PDF not showing? Some phones can&apos;t preview PDFs here — use the{' '}
          <span className="font-medium text-foreground">open in new tab</span> button above.
        </p>
      </dialog>
    </>
  )
}
