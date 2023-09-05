import moment from "moment";

type RealtimeClockOpts = {
  utcOffset?: string | number,
  format?: string,
};

export default function(opts: RealtimeClockOpts): Ref<string> {
  const utcOffset = opts?.utcOffset ?? 8;
  const format = opts?.format ?? "hh:mm H";

  const clock = ref(moment().utc().utcOffset(utcOffset).format(format));
  let clockEventId: null | number = null;

  onMounted(() => {
    clockEventId = setInterval(() => {
      clock.value = moment().utc().utcOffset(utcOffset).format(format);
    }, 1000) as any as number;
  });

  onUnmounted(() => {
    clearInterval(clockEventId as number);
  });

  return clock;
}
