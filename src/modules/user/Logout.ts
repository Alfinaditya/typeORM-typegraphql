import { Resolver, Mutation, Ctx } from 'type-graphql';
import { MyContext } from '../../myContext';
import { IsAuth } from '../middlewares/IsAuth';

@Resolver()
class LogoutResolver {
	// @IsAuth()
	@Mutation(() => Boolean)
	async logout(@Ctx() ctx: MyContext): Promise<Boolean> {
		ctx.res.cookie('jid', '', {
			sameSite: 'none',
			secure: true,
		});
		return true;
	}
}
export default LogoutResolver;
