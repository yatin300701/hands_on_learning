import { useState, type FC } from "react";
import { all } from "better-all";
interface EleminatingWaterFallsProps {}

const PERMIT = true;

const checkPermissions = new Promise<boolean>((res, rej) => {
  if (PERMIT) {
    setTimeout(() => {
      res(true);
    }, 1000);
  } else rej(false);
});
const getUser = new Promise<string>((res, rej) => {
  setTimeout(() => {
    res("Yatin");
  });
});

const EleminatingWaterFalls: FC<EleminatingWaterFallsProps> = async () => {
  // defer await untill required
  const [user, setUser] = useState<string>("");

  // in server components, wouldnt work here

  const permission = await checkPermissions;
  if (permission) {
    const user = await getUser;
    setUser(user);
  }

  //   2. Better all - dependency based parallelization

  /**
   * If cann't use promise.all if an api needs data from one of the req,
   *    then i would need to wait till i get that data then -> getC(a.name)
   *
   *   if i have getA, getB, getC (with depency of a),
   * if getA - 1s, getB 2s, getC 2s,
   * can we not do like, instead of
   * promise.all(getA,getB) -  2s
   * getC(a.name) - 2s
   *
   * Total : 4s
   * ....
   *
   * getA - 1s
   * promise.all(getB, getC(a.name)) - 2s
   *
   * Total : 3s
   * Therefore use 'better-all' lib
   */
  const { user, config, profile } = await all<{ user: boolean }>({
    async check() {
      return checkPermissions;
    },
    async,
  });
  return <>{user}</>;
};

export default EleminatingWaterFalls;
