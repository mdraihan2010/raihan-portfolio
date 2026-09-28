type Token = { text: string; kind?: 'kw' | 'type' | 'fn' | 'str' | 'com' | 'num' | 'pre' }

const lines: Token[][] = [
  [{ text: '#include', kind: 'pre' }, { text: ' <bits/stdc++.h>', kind: 'str' }],
  [{ text: 'using namespace', kind: 'kw' }, { text: ' std;' }],
  [],
  [{ text: '// learn, solve, repeat', kind: 'com' }],
  [{ text: 'int', kind: 'type' }, { text: ' ' }, { text: 'main', kind: 'fn' }, { text: '() {' }],
  [{ text: '  ios::' }, { text: 'sync_with_stdio', kind: 'fn' }, { text: '(' }, { text: 'false', kind: 'kw' }, { text: ');' }],
  [{ text: '  ' }, { text: 'int', kind: 'type' }, { text: ' t; cin >> t;' }],
  [{ text: '  ' }, { text: 'while', kind: 'kw' }, { text: ' (t--) {' }],
  [{ text: '    ' }, { text: 'solve', kind: 'fn' }, { text: '();' }],
  [{ text: '  }' }],
  [{ text: '  ' }, { text: 'return', kind: 'kw' }, { text: ' ' }, { text: '0', kind: 'num' }, { text: ';' }],
  [{ text: '}' }],
]

const tokenClass: Record<NonNullable<Token['kind']>, string> = {
  kw: 'text-primary',
  type: 'text-sky-600 dark:text-sky-300',
  fn: 'text-amber-600 dark:text-amber-200',
  str: 'text-emerald-700 dark:text-emerald-300',
  com: 'text-muted-foreground italic',
  num: 'text-rose-600 dark:text-rose-300',
  pre: 'text-violet-600 dark:text-violet-300',
}

export function CodeWindow() {
  return (
    <figure
      aria-label="Decorative C++ code snippet"
      className="relative mx-auto w-full max-w-md rounded-xl border border-border bg-card/80 shadow-2xl shadow-black/10 backdrop-blur-sm dark:shadow-black/40"
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3" aria-hidden="true">
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="size-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">solution.cpp</span>
      </div>
      <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6" aria-hidden="true">
        <code>
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="mr-5 w-5 shrink-0 select-none text-right text-muted-foreground/50">{i + 1}</span>
              <span>
                {line.map((tok, j) => (
                  <span key={j} className={tok.kind ? tokenClass[tok.kind] : undefined}>
                    {tok.text}
                  </span>
                ))}
                {line.length === 0 && ' '}
              </span>
            </div>
          ))}
        </code>
      </pre>
      <div className="flex items-center justify-between border-t border-border px-4 py-2.5 font-mono text-xs text-muted-foreground" aria-hidden="true">
        <span className="flex items-center gap-2">
          <span className="size-1.5 animate-pulse rounded-full bg-primary" />
          compiling ideas
        </span>
        <span>C++17</span>
      </div>
    </figure>
  )
}
