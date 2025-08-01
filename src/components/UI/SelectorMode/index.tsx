import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { useLanguageStore } from '@/stores/useLanguageStore'
import { useTranslation } from 'react-i18next'
import { useUpToTwoStore } from '@/stores/useUpToTwoStore'
import { useOffenseCalStore } from '@/stores/useOffenseCalStore'
import { useDefenseCalStore } from '@/stores/useDefenseCalStore'
import Link from 'next/link'
import { PATH } from '@/app/routes'
import { isOffensePath } from '@/utils/pathMode'
import { MODE, Mode } from '@/constants/mode'
import { getModeByPath } from '@/utils/pathMode'

export default function SelectorMode() {
  const pathname = usePathname()
  const router = useRouter()
  const { t } = useTranslation()
  const { lang } = useLanguageStore()

  const { selectedTypes } = useUpToTwoStore()
  const offenseCal = useOffenseCalStore((state) => state.calculate)
  const defenseCal = useDefenseCalStore((state) => state.calculate)

  const [mode, setMode] = useState<Mode>(getModeByPath(pathname, lang))

  useEffect(() => {
    setMode(getModeByPath(pathname, lang))
  }, [pathname, lang])

  useEffect(() => {
    const [type1, type2] = selectedTypes
    mode === 'offense'
      ? offenseCal({ type1, type2 })
      : defenseCal({ type1, type2 })
  }, [selectedTypes, mode])

  const handleSelect = (next: Mode) => {
    if (mode === next) return
    setMode(next)
    router.push(next === MODE.offense ? PATH().offense : PATH().defense)
  }

  return (
    <>
      <div className="color-[--text] mt-1 grid cursor-pointer grid-cols-2 justify-evenly font-['Noto_Sans_KR'] text-2xl font-black">
        {' '}
        {/** .Option */}
        <Link
          href={PATH().offense}
          aria-label={t('a11y.selectorMode.offense.aria-label')}
          aria-current={pathname === PATH().offense ? 'page' : undefined}
          aria-selected={mode === 'offense'}
          onClick={() => handleSelect('offense')}
          /** .Offense / OptionOffense */
          className={cn(
            'flex items-center justify-center justify-items-center border-t-0 border-r-0 border-l-0 px-[4rem] py-2 pb-6 text-center align-middle md:py-2 lg:pt-2',
            // [ ] UI 수정 후 유틸 클래스1 분리
            lang === 'ko' ? 'indent-5 tracking-[7px]' : 'tracking-[3px]',
            // [ ] UI 수정 후 유틸 클래스2 분리
            mode === 'offense'
              ? 'border-b-[4px] border-[var(--offenseRec)] text-[var(--offenseRec)] lg:border-b-[7px]'
              : 'border-b-[2px] border-[var(--border)] text-[var(--color-text)]',
            // [ ] UI 수정 후 유틸 클래스3 분리
          )}
        >
          {/* <Link
            href={PATH().offense}
            aria-label={t('a11y.selectorMode.offense')}
            aria-current={pathname === PATH().offense ? 'page' : undefined}
            aria-selected={mode === 'offense'}
            onClick={() => handleSelect('offense')}
          > */}
          <span
            className={cn(
              'mr-[0.8rem] inline-block sm:mr-[1rem] sm:pb-2',
              // [ ] UI 수정 후 유틸 클래스4 분리
              lang === 'ko' ? 'indent-5 tracking-[7px]' : 'tracking-[2.5px]',
              // [ ] UI 수정 후 유틸 클래스2 분리
              mode === 'offense',
            )}
          >
            {' '}
            {/**  .OptionText .OffenseText / OptionText OffenseText */}
            {t('Mode.offense')}
          </span>
        </Link>
        <Link
          href={PATH().defense}
          aria-label={t('a11y.selectorMode.defense.aria-label')}
          aria-current={pathname === PATH().defense ? 'page' : undefined}
          aria-selected={mode === 'defense'}
          onClick={() => handleSelect('defense')}
          /** .Defense / OptionDefense */
          className={cn(
            'flex items-center justify-center justify-items-center border-t-0 border-r-0 border-l-2 py-2 pb-6 text-center align-middle md:py-2 lg:pt-2',
            // [ ] UI 수정 후 유틸 클래스1 분리
            lang === 'ko'
              ? 'indent-[1.25rem] tracking-[7px]'
              : 'tracking-[3px]',
            mode === 'defense'
              ? 'border-b-[4px] border-[var(--defenseRec)] text-[var(--defenseRec)] lg:border-b-[7px]'
              : 'border-b-[2px] border-[var(--border)] text-[var(--color-text)]',
            // [ ] UI 수정 후 유틸 클래스3 분리
          )}
        >
          <span
            className={cn(
              'mr-[0.8rem] inline-block sm:mr-[1rem] sm:pb-2',
              // [ ] UI 수정 후 유틸 클래스4 분리
              lang === 'ko' ? 'indent-5 tracking-[7px]' : 'tracking-[2.5px]',
              // [ ] UI 수정 후 유틸 클래스2 분리
              mode === 'defense',
            )}
          >
            {' '}
            {/** OptionText DefenseText */}
            {t('Mode.defense')}
          </span>
        </Link>
      </div>
      <div className="mx-4 mt-8 mb-6 border-b-2 border-[var(--border)] sm:pb-4">
        {/* .InfoContainer */}

        <div
          // .info
          className={cn(
            'pt-0.5rem align-center col-span-1 mb-2 flex justify-around px-10 pb-2 text-center text-[0.9rem] font-normal break-words whitespace-normal lg:mb-6 lg:px-0 lg:py-6 lg:text-2xl lg:font-extrabold',
            lang === 'ko'
              ? 'tracking-[1.5px] break-keep'
              : 'tracking-[0.5px] break-normal',
          )}
        >
          <span className="">
            {mode === 'offense' ? t('Mode.offenseInfo') : t('Mode.defenseInfo')}
          </span>
        </div>
      </div>
    </>
  )
}
