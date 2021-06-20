export enum ResultMark {
  /** Отлично */
  Perfect,
  /** Очень хорошо */
  VeryWell,
  /** Хорошо */
  Well,
  /** Удовлетворительно */
  Satisfactorily,
  /** Дисквалификация */
  Disqualification,
  /** Невозможно отсудить */
  ImpossibleJudge,
  /** Без оценки */
  None,
  /** Большая перспектива */
  GreatPerspective,
  /** Перспективный */
  Perspective,
  /** Мало перспективный */
  SmallPerspective,
  /** Не перспективный */
  NotPerspective,
}

/** Оценки взрослых собак (>9 месяцев) */
export type AdultResultMark = ResultMark.Perfect
  | ResultMark.VeryWell
  | ResultMark.Well
  | ResultMark.Satisfactorily
  | ResultMark.Disqualification
  | ResultMark.ImpossibleJudge
  | ResultMark.None

/** Оценки щенкос с 3 до 9 месяцев */
export type BabyResultMark = ResultMark.GreatPerspective
  | ResultMark.Perspective
  | ResultMark.SmallPerspective
  | ResultMark.NotPerspective
  | ResultMark.Disqualification
  | ResultMark.ImpossibleJudge
  | ResultMark.None
